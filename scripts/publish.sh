#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${1:-}" ]]; then
  echo "Usage: ./scripts/publish.sh <github-username>"
  exit 1
fi

USER_NAME="$1"
REPO_NAME="tommyhoang.com"
REMOTE_URL="git@github.com:${USER_NAME}/${REPO_NAME}.git"

if [[ ! -d ".git" ]]; then
  git init
fi

git add .
git commit -m "Initial portfolio site for tommyhoang.com" || true
git branch -M main

if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin "$REMOTE_URL"
fi

git push -u origin main

echo "Pushed to ${REMOTE_URL}"
echo "Next: enable GitHub Pages in repository settings."
