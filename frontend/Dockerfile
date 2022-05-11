FROM node:lts-buster as frontend

WORKDIR /home/app/

COPY package.json /home/app/package.json

RUN yarn install

COPY . /home/app

EXPOSE 3000

CMD ["yarn", "start"]

