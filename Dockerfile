FROM node:alpine

COPY . /app

WORKDIR /app

RUN npm install

CMD ['npx', 'start']
