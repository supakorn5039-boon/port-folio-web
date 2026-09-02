#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$project_dir"

branch="$(git branch --show-current)"

if [[ "$branch" != "main" ]]; then
  echo "Deployment stopped: switch to the main branch first."
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Deployment stopped: commit or discard local changes first."
  exit 1
fi

npm run lint
npm run build
git commit --allow-empty -m "Trigger Vercel redeployment"
git push origin main

echo "Deployment triggered through GitHub and Vercel."
