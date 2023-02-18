FROM node:latest

WORKDIR /usr/reaped/dockerExample

COPY . .

RUN npm install

EXPOSE 5001

CMD node server.js