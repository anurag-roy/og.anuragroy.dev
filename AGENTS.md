# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single-service **Next.js (Pages Router) OpenGraph image generator**. One process (`pnpm dev`) serves both the UI and the `/api` Edge image endpoint on `http://localhost:3000`. There is no backend, database, auth, or env vars.

- **Node version:** The repo pins Node 24 (`.nvmrc`, `engines.node: 24.x`). Node 24 is installed via nvm and set as the nvm default, so fresh login shells (`bash -l`) automatically use it. If a shell resolves `node` to `/exec-daemon/node` (an older Node) instead, run `nvm use 24` (or start a login shell) before running project commands.
- **Package manager:** pnpm (pinned `pnpm@11.15.1` via corepack). Use `pnpm`, not npm/yarn, despite the README mentioning npm.
- **Run (dev):** `pnpm dev` — the only service to run. Verify with `curl http://localhost:3000/` and the image API, e.g. `curl "http://localhost:3000/api?title=Hello&description=World"` returns a 1200x630 `image/png`.
- **Typecheck:** `pnpm typecheck` (`next typegen && tsc --noEmit`). There is **no lint script and no test suite** in this repo.
- **Build (prod):** `pnpm build` then `pnpm start` (only needed for prod-build verification; use `pnpm dev` for development).
- **pnpm overrides gotcha (must stay in TWO places):** The dependency `overrides` are declared in BOTH `package.json` (`pnpm.overrides`) and `pnpm-workspace.yaml` (`overrides:`), and both copies must match the lockfile. This is because different pnpm versions read them from different locations: local dev uses pinned `pnpm@11` (reads `pnpm-workspace.yaml`, ignores `package.json`), while Vercel builds default to `pnpm@9` (reads `package.json`, ignores `pnpm-workspace.yaml`). Dropping either copy triggers `ERR_PNPM_LOCKFILE_CONFIG_MISMATCH` on a frozen install for the pnpm version that reads that location. Keep both in sync if you change overrides or regenerate the lockfile.
