FROM node:14.15 as builder

WORKDIR /usr/src/app

COPY . ./

RUN yarn

EXPOSE 1234

CMD [ "yarn", "start" ]