FROM node:19.0 AS build

# TODO: Setup nginx with ssl? Or disable internal redirect to ssl

WORKDIR /app
RUN mkdir apps
RUN mkdir apps/backend
RUN mkdir apps/frontend
RUN mkdir packages

COPY ./.env .

COPY ./package.json .
COPY ./yarn.lock .

COPY ./packages packages

COPY ./apps/backend/package.json apps/backend
COPY ./apps/frontend/package.json apps/frontend

RUN yarn install --frozen-lockfile
RUN yarn global add serve

COPY ./apps/backend apps/backend
COPY ./apps/frontend apps/frontend

ENV NODE_ENV production

RUN yarn backend:build
RUN yarn frontend:build

EXPOSE 3000
EXPOSE 3001

CMD ["yarn", "start"]