# Security Baseline (Excerpt)
- Authentication: OIDC, PKCE for public clients.
- Authorization: Role/permission model documented in SPEC.md.
- Data: At rest encryption; in transit TLS 1.2+ only.
- Secrets: Env-injected; never committed. Rotate at least quarterly.
- Dependencies: Use approved registry; automated vulnerability scanning.
