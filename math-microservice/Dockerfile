# FROM nestjs/cli:latest
FROM node:12.16.1

WORKDIR /usr/src/app


COPY ./package*.json ./

RUN npm install -g @nestjs/cli

RUN npm install

COPY ./ ./

EXPOSE 8000

CMD ["npm", "run", "start:dev"]