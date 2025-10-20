# Plan 03 — Request Engine & Proxy
## Tasks
- P03-T1: Node/Express proxy `POST /proxy` accepts {method,url,headers,body} with allow-list check.
- P03-T2: UI HttpClient service posts to /proxy and normalizes response.
- P03-T3: Error surface (network errors vs policy errors).
- P03-T4: Timeout and abort support.
## Risks
- Corp proxies or DNS issues → friendly diagnostics panel.
## Acceptance Mapping
- Requests to allowed hosts succeed; blocked hosts return policy error.
