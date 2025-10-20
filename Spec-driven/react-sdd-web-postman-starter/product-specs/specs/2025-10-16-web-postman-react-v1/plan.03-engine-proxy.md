# Plan 03 — Request Engine & Proxy Integration
## Tasks
- P03-T1: Node/Express proxy `POST /proxy` accepts {method,url,headers,body} with allow-list check.
- P03-T2: UI `requestEngine` posts to /proxy; normalize response shape.
- P03-T3: Error surface (network vs policy) with friendly messages.
- P03-T4: AbortController support for timeouts/cancel.
## Risks
- Corp proxies or DNS issues → diagnostics panel.
## Acceptance Mapping
- Requests to allowed hosts succeed; blocked hosts return policy error.
