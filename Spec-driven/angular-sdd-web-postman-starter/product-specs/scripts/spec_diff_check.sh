#!/usr/bin/env bash
set -euo pipefail
BASE_SHA=${1:-origin/main}

changed_specs=$(git diff --name-only "$BASE_SHA" | grep -E '^specs/.*' || true)
if [[ -n "$changed_specs" ]]; then
  changed_plan_or_index=$(git diff --name-only "$BASE_SHA" | grep -E '^specs/.*/plan.*\\.md$|^INDEX.md$' || true)
  if [[ -z "$changed_plan_or_index" ]] ; then
    echo "❌ Spec gate: specs changed without updating plan files and/or INDEX.md"
    echo "$changed_specs"
    exit 1
  fi
fi
echo "✅ product-specs spec gate passed"
