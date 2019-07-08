#!/usr/bin/env bash

./scripts/wait-for-it.sh prisma:4466 -- yarn prisma:deploy
yarn start:prod

exec "$@"