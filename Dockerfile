FROM node:14.15 as builder

WORKDIR /usr/src/app

COPY . ./

RUN yarn
# RUN yarn build

# FROM node:14.15 as runner

# COPY --from=builder /usr/src/app/ .

EXPOSE 1234

CMD [ "yarn", "start" ]