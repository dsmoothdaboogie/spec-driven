# Title: Web Postman (React) v1

## 1. Problem & Goals
A browser-based API client for making HTTP requests within the corporate network, with collections, environments, and history. No desktop installs.

## 2. Constraints & Compliance
- React + Vite + TypeScript; Jest; Selenium E2E.
- Proxy middleware handles TLS, CORS, allow-list; UI cannot directly bypass policy.
- No storage of secrets; redaction on export.

## 3. Architecture Intent
- UI (React) + Node/Express proxy (api-mw).
- UI never calls arbitrary origins; all requests flow through proxy.

## 4. Domain & Data Model
- Request { id, name, method, url, headers[], query[], body (raw|form), auth }
- Environment { id, name, variables[{key,value,isSecret}] }
- Collection { id, name, items: Request[] | Folder[] }
- History { id, requestId, timestamp, duration, status, size }

## 5. Non-Functionals
- Perf: FMP < 2s; send round-trip overhead from proxy < 50ms internal.
- Security: redact secrets in UI & proxy logs; CSP strict; allow-list enforced.
- A11y: WCAG 2.2 AA; keyboard-first workflow.

## 6. Acceptance Criteria
See `ACCEPTANCE.md`

## 7. Scaffolding Rules
- React + React Router; feature folders; testing-library for unit tests.
- Jest unit; Selenium e2e page objects; scripts defined in package.json.

## 8. Risks & Mitigations
- CORS/TLS issues → proxy normalization and clear error surfaces.
- Leaky storage → no secrets persisted; explicit redaction on export.
