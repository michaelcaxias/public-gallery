FROM node:16-alpine as frontend

WORKDIR /home/app/

COPY package.json /home/app/package.json

RUN sudo chmod -R 777 /home/app

RUN npm i

COPY . /home/app

EXPOSE 3000

CMD ["npm", "start"]

