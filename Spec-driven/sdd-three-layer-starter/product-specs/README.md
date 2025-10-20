# product-specs (Standards · Product Vision · Specifications)

This repository is the **source of truth** for our Spec-Driven AI Development workflow.

**Three layers:**

- `standards/` — Engineering standards, security baseline, agent runbooks, reusable workflows.
- `vision/` — Durable product vision, personas, capabilities, success metrics.
- `specs/` — Feature-level specifications (each in its own folder) with plan, acceptance, and contracts.

**Key files:**

- `INDEX.md` — Table of contents + lineage.
- `scripts/new-spec.sh` — Generator for a new spec folder (timestamped).
- `scripts/spec_diff_check.sh` — CI gate enforcing plan-first and lineage updates.
- `contracts/` (inside each spec folder) — Authoritative OpenAPI files.
