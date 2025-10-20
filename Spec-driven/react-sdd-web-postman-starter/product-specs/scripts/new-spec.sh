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
## 5. Non-Functionals
## 6. Acceptance Criteria
## 7. Scaffolding Rules
## 8. Risks & Mitigations
EOF
echo "# Acceptance Tests (GWT)" > "${DIR}/ACCEPTANCE.md"
echo "# Plan — fill tasks, risks, acceptance mapping" > "${DIR}/plan.01.md"
echo "- ${DATE} — ${NAME} ${VER}: ${DIR}" >> INDEX.md
echo "✅ Created ${DIR}"
