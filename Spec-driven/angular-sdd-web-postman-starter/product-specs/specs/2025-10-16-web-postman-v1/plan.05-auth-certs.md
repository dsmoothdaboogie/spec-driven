# Plan 05 — Auth & Certificates
## Tasks
- P05-T1: Auth tab: Basic, Bearer; UI stores tokens only in memory.
- P05-T2: Proxy attaches client cert (configured server-side) on allow-listed targets.
- P05-T3: Redact Authorization headers in logs and exports.
## Acceptance Mapping
- Requests with header-based auth succeed; secrets never written to disk.
