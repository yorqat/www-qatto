FROM --platform=arm64 node:18-alpine3.15

ENV NODE_ENV=production
WORKDIR /app

COPY . .

CMD [ "npm", "run", "serve"]
