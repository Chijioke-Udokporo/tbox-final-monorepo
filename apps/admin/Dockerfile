ARG BUILDPLATFORM=linux/amd64

FROM --platform=${BUILDPLATFORM} node:20.14.0-alpine

RUN corepack enable

WORKDIR /app

COPY . .

RUN rm .env
RUN rm .env.deploy
RUN pnpm install

RUN pnpm run build

RUN rm -rf app
RUN rm -rf server
RUN rm -rf .local


EXPOSE 3000

CMD ["pnpm","run","start"]
