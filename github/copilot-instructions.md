# GitHub Copilot Instructions — Agent-OS + Prompt File Workflow

## Overview
This repository uses **GitHub Copilot prompt files** (`.github/prompts/*.md`) for
an Agent-OS-style, spec-driven development workflow.  
All product knowledge, standards, and specifications live under the `agent-os/` folder.

Copilot Chat should:
1. Use prompt files from `.github/prompts/` to follow the proper phase order.
2. Load relevant context from `agent-os/` (standards, vision, specs).
3. Obey all engineering and security baselines before generating any code.

---

## Repository structure
```
.github/
  prompts/                  ← reusable phase prompts
  copilot-instructions.md   ← this file
agent-os/
  standards/                ← AGENTS.md, ENGINEERING-STANDARDS.md, SECURITY-BASELINE.md
  vision/                   ← PRODUCT-VISION.md, PERSONAS.md, CAPABILITIES.md
  specs/                    ← SPEC.md, ACCEPTANCE.md, plan.*.md (one folder per feature)
```

---

## How Copilot should behave

### Context hierarchy
When processing any prompt or ad-hoc query:
1. **Always read**:
   - `agent-os/standards/**`
   - `agent-os/vision/**`
   - `agent-os/specs/<active feature>/**`
2. Optionally check:
   - `.github/prompts/<phase>.md` for phase logic
   - Prior specs for lineage or reuse

### Guardrails
- **Plan-before-code**: Generate a diff plan first; wait for confirmation (“Proceed”) before emitting code.
- **No scope creep**: Implement only what’s listed in the active plan.
- **Traceability**: Link every change to acceptance tests or risk items.
- **Deterministic output**: Explicit file paths, function names, and tests.
- **Security baseline**: Never output secrets, PII, or external fetches beyond the proxy allow-list.

### Output expectations
| Phase | Prompt file | Deliverable |
|--------|--------------|-------------|
| Plan Product | `01_plan-product.md` | SPEC outline, questions, risk table |
| Shape Spec | `02_shape-spec.md` | Structured SPEC.md with placeholders |
| Write Spec | `03_write-spec.md` | Complete SPEC + ACCEPTANCE.md |
| Create Tasks | `04_create-tasks.md` | One or more plan.*.md files |
| Implement | `05_implement-tasks.md` | Diff plan → Code + Tests |
| Orchestrate | `06_orchestrate-verify.md` | Verification report |

---

## Prompt-file usage
Each file in `.github/prompts/` follows the GitHub customization-library format:

```yaml
---
mode: "agent"
description: "Short summary"
---
# Body instructions here
```

You can run them directly from **Copilot Chat** in VS Code or JetBrains:
1. Open Copilot Chat → click **Prompt files** → pick the desired phase.
2. Copilot automatically loads the workspace and the prompt context.
3. Confirm or edit results before committing generated files.

---

## Example flow
1. Run **`00_new-spec.md`** → creates a new spec scaffold in `agent-os/specs/`.
2. Run **`01_plan-product.md`** → clarifies goals, risks.
3. Run **`02_shape-spec.md`** → outlines sections.
4. Run **`03_write-spec.md`** → writes full spec + acceptance.
5. Run **`04_create-tasks.md`** → breaks into plan files.
6. Run **`05_implement-tasks.md`** → executes two-step implementation.
7. Run **`06_orchestrate-verify.md`** → validates outcomes.

---

## Recommended CI enforcement
- A spec-gate workflow that fails if:
  - Code changed but no plan.*.md was modified, or
  - SPEC.md/ACCEPTANCE.md drift from standards.
- Security scans & dependency audits tied to `SECURITY-BASELINE.md`.

---

## If unsure
Copilot must:
1. Ask up to 7 concise clarifying questions.
2. Offer two viable options with trade-offs.
3. Recommend one, citing standards and acceptance criteria.

---

**TL;DR:**  
Use `.github/prompts` for controlled Copilot workflows, `agent-os/` for all product context,  
and follow *Plan → Shape → Write → Tasks → Implement → Orchestrate* without skipping phases.
