FROM oven/bun:1.1.30
WORKDIR /app

COPY . .
RUN rm -rf apps/admin

#RUN bun install node-gyp --global

RUN bun install
RUN bun run build

ENV NODE_ENV=production

CMD ["bun", "run", "start"]