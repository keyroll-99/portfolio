FROM node:latest as build

WORKDIR /app
COPY . /app

RUN npm install -g @angular/cli

RUN npm install

RUN npm run build

ENTRYPOINT ["false"]
