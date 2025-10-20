# AGENTS.md (api-mw)

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Tests: `npm test` and `npm run test:contract`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`

## Contract Handling
- Import `openapi.yaml` from @org/contracts or submodule under `contracts/`.
- Fail PR if implementation drifts from contract.
