FROM node:latest

ENV NODE_ENV=production
WORKDIR /app
COPY . .

CMD [ "node", "server/entry.express"]
