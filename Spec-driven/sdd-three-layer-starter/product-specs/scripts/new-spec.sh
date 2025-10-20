#!/usr/bin/env bash
set -euo pipefail
DATE=$(date +%F)
NAME=${1:?feature-name-required}
VER=${2:-v1}
DIR="specs/${DATE}-${NAME}-${VER}"
mkdir -p "${DIR}/contracts"
cat > "${DIR}/SPEC.md" <<'EOF'
# Title: <Feature Name>

## 1. Problem & Goals
## 2. Constraints & Compliance
## 3. Architecture Intent
## 4. Domain & Data Model
## 5. API Contracts (see contracts/openapi.yaml)
## 6. Acceptance Criteria & Test Matrix
## 7. Scaffolding Rules
## 8. Risks & Mitigations
## 9. Rollout & Ops
EOF
cat > "${DIR}/PLAN.md" <<'EOF'
# Plan

## Task Graph
## Risks
## Acceptance Mapping
EOF
cat > "${DIR}/ACCEPTANCE.md" <<'EOF'
# Acceptance Tests (GWT)
EOF
cat > "${DIR}/contracts/openapi.yaml" <<'EOF'
openapi: 3.0.3
info: { title: <Feature API>, version: 0.1.0 }
paths: {}
components: {}
EOF
echo "- ${DATE} — ${NAME} ${VER}: ${DIR}" >> INDEX.md
echo "✅ Created ${DIR}"
