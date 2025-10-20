# AGENTS.md — Copilot & Human Runbook (Angular 19, Jest, Selenium)

## Ground Rules
1) Read `standards/*.md` and `vision/*` first.
2) For any new feature under `specs/`, scan previous related specs for reuse.
3) Always propose/update a PLAN.md delta before producing code.
4) Use the exact repo commands (below) so generated code is runnable in CI.
5) No secrets/PII in specs, prompts, tests, or fixtures.

## Repo Commands (ui-app)
- Dev: `npm start`
- Build: `npm run build`
- Unit tests (Jest): `npm test`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- E2E (Selenium): `npm run e2e`

## Repo Commands (api-mw)
- Dev: `npm run dev`
- Test: `npm test`
- Lint: `npm run lint`

## Reusable Workflows
See `standards/WORKFLOWS/*` and paste into Copilot inline chat.
