FROM node:19.0-slim AS build

WORKDIR /base
RUN mkdir apps
RUN mkdir apps/frontend
RUN mkdir packages

COPY ./.env .

COPY ./package.json .
COPY ./yarn.lock .

COPY ./packages packages

COPY ./apps/frontend/package.json apps/frontend

RUN yarn install --frozen-lockfile
RUN yarn global add serve

COPY ./apps/frontend apps/frontend

ENV NODE_ENV production

RUN yarn frontend:build

CMD [ "serve", "apps/frontend/build" ]