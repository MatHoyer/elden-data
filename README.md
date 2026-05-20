# Elden Data

Elden Ring checklist app: track bosses, items, and gear with per-user progress. The frontend is a React SPA; [PocketBase](https://pocketbase.io/) provides the API, auth, and database.

## Stack

| Layer | Tech |
|-------|------|
| Frontend | React 19, TypeScript, Vite, TanStack Router & Form, Zustand, shadcn/ui, Tailwind CSS v4, i18next (en/fr) |
| Backend | PocketBase 0.38 (collections via JS migrations) |
| Deploy | Multi-stage Docker image (build client → serve static + PocketBase on `:8090`) |

## Repository layout

```
├── client/              # Vite React app (`pnpm dev`, `pnpm build`)
│   └── src/
│       ├── pages/       # Route screens (*.page.tsx)
│       ├── routes/      # TanStack Router route definitions
│       ├── components/  # UI, forms, dialogs, layout
│       ├── hooks/
│       ├── i18n/locales/
│       └── types/       # PocketBase record types
├── pb_migrations/       # Schema migrations + default_data JSON seeds
├── pb_data/             # PocketBase data dir (created at runtime, gitignored)
├── Dockerfile           # Build client + run PocketBase
├── docker-compose.yml
└── Makefile             # Docker helpers
```

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (for PocketBase in dev/production)
- [Node.js 22+](https://nodejs.org/) and [pnpm](https://pnpm.io/) (for frontend dev)

## Quick start (development)

### 1. Run PocketBase

```bash
make start
```

API and admin UI: [http://127.0.0.1:8090](http://127.0.0.1:8090)

On first run, grab the installer link:

```bash
make get_init_url
```

Create a superuser (optional; for admin UI):

```bash
make create_admin
# admin@example.com / adminpassword
```

### 2. Run the frontend

```bash
cd client
pnpm install
cp .env.example .env
pnpm dev
```

App: [http://localhost:5173](http://localhost:5173)

Vite proxies `/api` to PocketBase (`vite.config.ts`). Use a **same-origin** API base in `.env`:

```env
VITE_PB_URL=/
```

Do not use an empty string — PocketBase will build URLs like `/register/api/...` and return 404.

Alternatively, point directly at PocketBase (requires CORS configured on the server):

```env
VITE_PB_URL=http://127.0.0.1:8090
```

### 3. Auth

Register or log in via `/register` and `/login`. The `users` auth collection is PocketBase’s built-in auth; migrations add `language` and relations for `user_bosses` / `user_items`.

## Production (Docker)

Build and run the full stack (static frontend + PocketBase):

```bash
make rebuild   # wipes pb_data, rebuilds image, starts fresh
# or
docker compose up -d --build
```

Open [http://127.0.0.1:8090](http://127.0.0.1:8090) — the SPA is served from PocketBase’s `publicDir`.

## Makefile

| Command | Description |
|---------|-------------|
| `make start` | Start PocketBase in Docker |
| `make stop` | Stop containers |
| `make rebuild` | Reset `pb_data`, rebuild image, start |
| `make get_init_url` | Print PocketBase first-time setup URL from logs |
| `make create_admin` | Upsert superuser `admin@example.com` / `adminpassword` |

## Client scripts

From `client/`:

```bash
pnpm dev      # Vite dev server
pnpm build    # Typecheck + production build → dist/
pnpm lint     # ESLint
pnpm preview  # Preview production build
```

Path alias: `@/` → `client/src/`.

## PocketBase migrations

Migrations in `pb_migrations/` run automatically when PocketBase starts. They define catalogs (bosses, items, locations, …), user progress collections, and seed data under `pb_migrations/default_data/`.

To reset local data completely:

```bash
make rebuild
```

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs `pnpm build` in `client/` on push/PR to `main`.

## Cursor rules

Project conventions for AI-assisted edits live in `.cursor/rules/` (`project.mdc`, `client-react.mdc`, `client-typescript.mdc`).
