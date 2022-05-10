FROM node:lts-buster

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm i

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]

