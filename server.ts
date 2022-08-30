import { Application, gzip, Router, send, MongoClient, Bson, Credential } from './deps.ts';

const index = 'index.html';
const root = `${Deno.cwd()}/build`;
const existing = await getPaths(root);
console.log(`Existing are ${existing}`);

const mongoClient = new MongoClient();

/// recursively grabs all the paths in the build directory
async function getPaths(currentPath: string) {
  const names: string[] = [];
  
  for await (const dirEntry of Deno.readDir(currentPath)) {
    const entryPath = `${currentPath}/${dirEntry.name}`;
    
    const paths: string[] = dirEntry.isDirectory
    ? await getPaths(entryPath)
    : [entryPath.substring(root.length)];
    
    names.push(...paths);
  }
  
  return names;
}

const app = new Application();
const router = new Router();

interface ProjectSchema {
  _id: Bson.ObjectId;
  repository: string,
  project_name: string,
  description: string,
  art: string,
}

const credential: Credential = {
  db: 'projects',
  username: 'mongo',
  password: 'mongo',
  mechanism: 'SCRAM-SHA-1',
};

const atlasConnectOptions = {
  db: 'projects',
  servers: [
    {
      host: `${Deno.env.get('MONGODB_HOST')}`,
      port: 27017,
    }
  ],
  credential,
  tls: true,
};

await mongoClient.connect(atlasConnectOptions);

router.get('/assets/projects', async (ctx) => {
  const db = mongoClient.database("projects");
  const projects = db.collection<ProjectSchema>("showcase");
  
  ctx.response.body = await projects.aggregate([
    { $match: { repository: { $ne: null } } },
  ]).toArray();
});

/// fetches instagram images- serving at this path
router.get('/assets/images', async (ctx) => {
  const origin = `https://graph.instagram.com/me/media?fields=id,caption,media_url\
	&access_token=${Deno.env.get('ACCESS_TOKEN')}`;

  await fetch(origin)
    .then((res) => (ctx.response.body = res.body))
    .catch((err) => (ctx.response.body = err));
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
  let path = ctx.request.url.pathname;
  console.log(`requested path is ${path}`);
  if (path === '/' || !existing.includes(path)) {
    path = index;
  } else {
    console.log('it exists');
  }

  await send(ctx, path, { root, index });
});

app.use(gzip());

await app.listen({ port: 3005 });
