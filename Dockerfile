FROM node:latest

WORKDIR /usr/app     

COPY . . 

RUN npm i

EXPOSE 3001

CMD node server.js
