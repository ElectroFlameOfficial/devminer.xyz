FROM node:18 AS builder
WORKDIR /app

COPY ./package.json ./yarn.lock /app/
RUN yarn install --frozen-lockfile

COPY . /app
RUN yarn build



FROM gostatic AS runner

COPY --from=builder /app/dist /static
