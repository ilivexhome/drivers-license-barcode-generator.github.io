FROM node:latest

MAINTAINER Kyle Decot <kyle.decot@icloud.com>

WORKDIR /app

COPY package.json yarn.lock ./
COPY . .

RUN yarn install

EXPOSE 8000

CMD ["yarn, "start"]
