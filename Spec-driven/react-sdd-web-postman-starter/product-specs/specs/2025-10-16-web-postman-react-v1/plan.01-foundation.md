# Plan 01 — Foundation & Toolchain (React)
## Tasks
- P01-T1: Initialize Vite+React+TS app with React Router.
- P01-T2: Configure Jest + React Testing Library.
- P01-T3: Add Selenium WebDriver harness + page object skeletons.
- P01-T4: Establish domain models (Request, Environment, Collection) in `/src/domain`.
- P01-T5: Global styles, theme, and a11y helpers (focus outlines).
## Risks
- Jest + Vite transform mismatches → use ts-jest or babel-jest config.
## Acceptance Mapping
- Unit tests run; E2E launches browser and reaches home page.
