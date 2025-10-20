#!/usr/bin/env bash
set -euo pipefail
BASE_SHA=${1:-origin/main}

changed_src=$(git diff --name-only "$BASE_SHA" | grep -E '^src/' || true)
if [[ -n "$changed_src" ]]; then
  changed_spec_or_plan=$(git diff --name-only "$BASE_SHA" | grep -E '^SPEC.md$|^PLAN.md$' || true)
  if [[ -z "$changed_spec_or_plan" ]]; then
    echo "❌ Spec gate: Code changed without SPEC.md/PLAN.md updates"
    echo "$changed_src"
    exit 1
  fi
fi
echo "✅ api-mw spec gate passed"
