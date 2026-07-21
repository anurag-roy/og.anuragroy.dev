# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single-service **Next.js (Pages Router) OpenGraph image generator**. One process (`pnpm dev`) serves both the UI and the `/api` Edge image endpoint on `http://localhost:3000`. There is no backend, database, auth, or env vars.

- **Node version:** The repo pins Node 24 (`.nvmrc`, `engines.node: 24.x`). Node 24 is installed via nvm and set as the nvm default, so fresh login shells (`bash -l`) automatically use it. If a shell resolves `node` to `/exec-daemon/node` (an older Node) instead, run `nvm use 24` (or start a login shell) before running project commands.
- **Package manager:** pnpm (pinned `pnpm@11.15.1` via corepack). Use `pnpm`, not npm/yarn, despite the README mentioning npm.
- **Run (dev):** `pnpm dev` — the only service to run. Verify with `curl http://localhost:3000/` and the image API, e.g. `curl "http://localhost:3000/api?title=Hello&description=World"` returns a 1200x630 `image/png`.
- **Typecheck:** `pnpm typecheck` (`next typegen && tsc --noEmit`). There is **no lint script and no test suite** in this repo.
- **Build (prod):** `pnpm build` then `pnpm start` (only needed for prod-build verification; use `pnpm dev` for development).
- **pnpm overrides gotcha:** pnpm 11 no longer reads `pnpm.overrides` from `package.json`; those overrides live in `pnpm-workspace.yaml` under `overrides:` so `pnpm install --frozen-lockfile` matches the lockfile. If you regenerate the lockfile, keep overrides in `pnpm-workspace.yaml`.
