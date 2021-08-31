FROM node:14.15.4

WORKDIR /use/src/app

COPY package*.json ./

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]