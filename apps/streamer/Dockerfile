ARG BUILDPLATFORM=linux/amd64

FROM --platform=${BUILDPLATFORM} imbios/bun-node:latest-current-slim

WORKDIR /app

COPY . .

RUN bun install

ENV NODE_ENV=production

RUN bun run build

RUN rm -rf src

CMD ["bun", "run", "start"]