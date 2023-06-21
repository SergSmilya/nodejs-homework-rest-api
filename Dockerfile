FROM node:16.17.1

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "./server.js"]

EXPOSE 3000