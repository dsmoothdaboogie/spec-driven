# AGENTS.md — Agent & Human Runbook (Copilot-aware)

## Ground Rules
1) Read `standards/*.md` and `vision/*.md` first.
2) When working on a new spec, scan previous `specs/*` with similar domain and reuse patterns.
3) Always propose a `PLAN.md` delta before writing code.
4) Use the exact commands from each consumer repo's `AGENTS.md` (api-mw, ui-app).
5) Do not include secrets or PII in prompts, specs, or tests.

## Common Commands (examples)
- Contract lint: `npm run contract:lint`
- Unit tests: `npm test`
- Typecheck: `npm run typecheck`
- Lint: `npm run lint`

## Reusable Workflows
See `standards/WORKFLOWS/*` — copy/paste into Copilot inline chat.
