# Security Baseline
- Auth: corporate SSO if required; app may run unauthenticated in intranet.
- Authorization: server enforces allow-list of outbound targets.
- Data: do not export secrets; redaction on collection/environment exports.
- Dependencies: approved registry only; CI vulnerability scans.
