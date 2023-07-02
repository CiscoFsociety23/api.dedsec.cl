FROM node:18.16.1-alpine3.18

WORKDIR /app
COPY . .
RUN npm i

CMD ["node", "/app/src/index.js"]