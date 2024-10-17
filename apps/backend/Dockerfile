ARG BUILDPLATFORM=linux/amd64

FROM --platform=${BUILDPLATFORM} imbios/bun-node:latest-current-slim
WORKDIR /app

COPY . .

RUN bun install
ENV NODE_ENV=production
ENV DATABASE_URL=file:../db/box.db?connection_limit=1&_journal_mode=WAL
RUN bunx prisma generate
RUN bunx prisma migrate deploy
RUN bunx prisma db seed

RUN bun run build

RUN rm -rf src



CMD ["bun", "run", "start"]