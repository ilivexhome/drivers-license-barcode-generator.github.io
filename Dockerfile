FROM node:latest

MAINTAINER Kyle Decot <kyle.decot@icloud.com>

WORKDIR /app

RUN yarn install

COPY package.json yarn.lock ./
COPY . .

EXPOSE 8000

VOLUME /app

CMD ["yarn", "start"]
