FROM node:18.16.1

WORKDIR /app
COPY . .
RUN npm i

CMD ["node", "/app/src/index.js"]