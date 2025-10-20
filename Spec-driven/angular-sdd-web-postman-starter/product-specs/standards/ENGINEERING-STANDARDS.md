# Engineering Standards — Angular 19, Jest, Selenium

## Frontend (Angular 19)
- Use **standalone components** and signals where appropriate.
- State: component-local or service + RxJS; avoid global mutable singletons.
- HTTP: use Angular HttpClient; no direct window.fetch in UI.
- Accessibility: WCAG 2.2 AA; keyboard-first; focus management on dialogs.
- Performance: lazy routes, route-level code splitting, OnPush-like patterns.

## Testing
- **Unit**: Jest + jest-preset-angular. Aim for 70–80% coverage on core logic.
- **Component Harness**: prefer Angular Testing Harness where feasible.
- **E2E**: Selenium WebDriver with page objects; no flakey sleeps; explicit waits only.

## API/Middleware
- Node/Express proxy for CORS/certs: `POST /proxy` handles outbound requests.
- Deny-list local metadata endpoints; restrict private networks as per policy.
- TLS: mTLS/cert pinning configurable via server (never from UI).

## Security
- No credential storage in LocalStorage. Use session memory for volatile secrets.
- Strict CSP; sandbox third-party content; sanitize rendered payloads.
- Mask secrets in logs; redact Authorization headers in UI and server logs.
