FROM node:lts-alpine

RUN apk add --no-cache bash && \
    npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

