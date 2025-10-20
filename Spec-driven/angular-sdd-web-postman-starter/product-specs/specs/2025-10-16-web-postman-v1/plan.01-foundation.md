# Plan 01 — Foundation & Toolchain
## Tasks
- P01-T1: Initialize Angular 19 app (standalone, routing).
- P01-T2: Configure Jest (jest-preset-angular) and remove Karma.
- P01-T3: Add Selenium WebDriver harness + page object skeletons.
- P01-T4: Establish domain models (Request, Environment, Collection).
- P01-T5: Global styles, theme, and a11y helpers (focus outlines).
## Risks
- Jest config mismatch → add setup-jest.ts and transform.
## Acceptance Mapping
- Unit tests run; E2E launches browser and reaches home page.
