import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import QwikCityPlan from "@qwik-city-plan";
import express, { Router } from "express";
import { fileURLToPath } from "url";
import { join } from "path";
import render from "./entry.ssr";

// Directories where the static assets are located
const distDir = join(fileURLToPath(import.meta.url), "..", "..", "dist");
const buildDir = join(distDir, "build");

// Create the Qwik City express middleware
const { router, notFound } = createQwikCity({
  render,
  qwikCityPlan: QwikCityPlan,
});

// Create the express server
// https://expressjs.com/
const app = express();

// why isn't this a default anyway
app.use(express.json());

const routerAPI = Router({});

routerAPI.get("/gallery/images", async (req, resp) => {
  const origin = `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${process.env.ACCESS_TOKEN}`;

  await fetch(origin)
    .then(async (res) => resp.json(await res.json()))
    .catch((err) => resp.json(err));
});

routerAPI.get("/gallery/image", async (req, resp) => {
  const origin = `https://graph.instagram.com/${req.query.id}?fields=id,caption,media_url&access_token=${process.env.ACCESS_TOKEN}`;

  await fetch(origin)
    .then(async (res) => resp.json(await res.json()))
    .catch((err) => resp.json(err));
});

app.use(routerAPI);

// Static asset handlers
// https://expressjs.com/en/starter/static-files.html
app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: "1y" }));
app.use(express.static(distDir, { redirect: false }));

// Use Qwik City's page and endpoint request handler
app.use(router);

// Use Qwik City's 404 handler
app.use(notFound);

// Start the express server
app.listen(3000, () => {
  /* eslint-disable */
  console.log(`http://localhost:3000/`);
});
