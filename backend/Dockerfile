FROM node:lts-buster-slim

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm i

COPY . /usr/src/app

EXPOSE 3001

CMD ["npm", "run", "dev"]

