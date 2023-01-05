FROM node:19-alpine AS build

WORKDIR /app
RUN mkdir apps
RUN mkdir apps/backend
RUN mkdir packages

COPY ./.env .

COPY ./package.json .
COPY ./yarn.lock .

COPY ./packages packages

COPY ./apps/backend/package.json apps/backend

RUN yarn install --frozen-lockfile

COPY ./apps/backend apps/backend

ENV NODE_ENV production

RUN yarn backend:build

CMD [ "yarn", "backend:start" ]

