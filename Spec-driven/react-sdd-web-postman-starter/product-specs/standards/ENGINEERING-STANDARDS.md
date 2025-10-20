# Engineering Standards — React, Jest, Selenium

## Frontend (React)
- Stack: React 18 + Vite + TypeScript + React Router.
- State: component state + hooks; lift shared state into context when needed.
- Networking: fetch/axios via a `requestEngine` that calls the proxy only.
- Accessibility: WCAG 2.2 AA; keyboard-first; visible focus; ARIA for tabs and dialogs.
- Performance: code-split routes; memoize expensive subtrees; avoid unnecessary re-renders.

## Testing
- **Unit**: Jest + React Testing Library. Aim for 70–80% coverage on core logic and components.
- **E2E**: Selenium WebDriver with page objects; explicit waits only; stable selectors with `data-testid`.
- Snapshots allowed for pure presentational components only.

## API/Middleware
- Node/Express proxy for CORS/certs: `POST /proxy` handles outbound requests.
- Enforce allow-list of target hosts; redact secrets in logs.
- TLS/mTLS handled by server; never from UI.

## Security
- Never persist secrets in LocalStorage. Prefer in-memory state for tokens.
- Strict CSP; sanitize rendered payloads; escape untrusted snippets.
