FROM node:alpine as build

WORKDIR /app

COPY client/package.json /app/package.json
COPY client/yarn.lock /app/yarn.lock

RUN yarn

COPY client/ .

RUN yarn build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
