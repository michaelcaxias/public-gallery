FROM node:16-alpine as backend

WORKDIR /home/app/

COPY package.json /home/app/package.json

RUN yarn install

COPY . /home/app

EXPOSE 3001

CMD ["yarn", "run", "dev"]

