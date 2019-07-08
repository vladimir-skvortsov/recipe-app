FROM node:alpine

LABEL maintainer="Vladimir Skvortsov <public@vladimirskvortsov.com> (https://vladimirskvortsov.com)"

WORKDIR /usr/source/app
COPY . .

RUN apk add --no-cache \
  autoconf \
  automake \
  bash \
  g++ \
  libc6-compat \
  libjpeg-turbo-dev \
  libpng-dev \
  make \
  nasm \
  yarn
RUN yarn
RUN yarn build:prod

RUN chmod -R +x ./scripts/

ENTRYPOINT ["./scripts/entrypoint.sh"]