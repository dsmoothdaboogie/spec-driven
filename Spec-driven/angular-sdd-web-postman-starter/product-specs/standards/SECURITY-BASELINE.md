# Security Baseline
- Auth: corporate SSO if needed; or app runs unauthenticated in intranet.
- Authorization: server filters outbound targets by allow-list.
- Data: never persist secrets to disk; export/import collections without secrets.
- Dependencies: approved registry only; automated vulnerability scans in CI.
