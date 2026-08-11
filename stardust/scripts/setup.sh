#!/usr/bin/env bash
# One-time environment prep for the stardust:uplift skill in this repo.
# Run once per fresh session/container before invoking /stardust:uplift.
set -euo pipefail

cd "$(dirname "$0")/../.."

echo "== installing plugins =="
claude plugin marketplace add adobe/skills
claude plugin marketplace add pbakaus/impeccable
claude plugin install stardust@adobe-skills
claude plugin install impeccable@impeccable

echo "== wiring impeccable's skill into this project =="
# stardust's setup checks for the impeccable skill under a standard harness
# directory, and impeccable's own scripts are invoked via the project-relative
# path .claude/skills/impeccable/scripts/*.
IMPECCABLE_SRC=$(find "$HOME/.claude/plugins/cache/impeccable/impeccable" -maxdepth 1 -mindepth 1 -type d | sort -V | tail -1)/skills/impeccable
mkdir -p .claude/skills
rm -rf .claude/skills/impeccable
cp -r "$IMPECCABLE_SRC" .claude/skills/impeccable

echo "== installing playwright (pinned to the environment's preinstalled Chromium revision) =="
PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install --legacy-peer-deps

echo "== verifying =="
node -e "require('playwright'); console.log('playwright import-resolvable: OK')"

echo "Setup complete. Run: /stardust:uplift <url>"
