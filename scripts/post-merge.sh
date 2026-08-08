#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Keep merge setup deterministic and non-interactive. The lockfile is the
# source of truth, and the production build validates prerendering and assets.
npm ci --prefer-offline --no-audit --no-fund
npm run build