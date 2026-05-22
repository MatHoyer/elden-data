FROM node:22-alpine AS deps

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.33.4 --activate
COPY client/package.json client/pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.33.4 --activate

COPY --from=deps /app/node_modules ./node_modules
COPY client/ .

ARG VITE_PB_URL=/
ENV VITE_PB_URL=${VITE_PB_URL}

RUN pnpm build

FROM alpine:3.21 AS runtime

WORKDIR /pb

ARG POCKETBASE_VERSION=0.38.1

RUN apk add --no-cache ca-certificates unzip wget \
    && wget -qO /tmp/pb.zip "https://github.com/pocketbase/pocketbase/releases/download/v${POCKETBASE_VERSION}/pocketbase_${POCKETBASE_VERSION}_linux_amd64.zip" \
    && unzip /tmp/pb.zip -d /pb \
    && chmod +x /pb/pocketbase \
    && rm /tmp/pb.zip \
    && apk del wget unzip

COPY --from=build /app/dist ./public
COPY pb_migrations ./pb_migrations

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090", "--publicDir=/pb/public"]
