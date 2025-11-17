#!/bin/bash

# Setup git hooks for datastructures project
# This script creates git hooks if they don't already exist

set -e

HOOKS_DIR=".git/hooks"
PRE_COMMIT="$HOOKS_DIR/pre-commit"
COMMIT_MSG="$HOOKS_DIR/commit-msg"

# Check if we're in a git repository
if [ ! -d ".git" ]; then
  echo "Error: Not in a git repository"
  exit 1
fi

echo "Setting up git hooks..."

# Create hooks directory if it doesn't exist
mkdir -p "$HOOKS_DIR"

# Setup pre-commit hook
if [ -f "$PRE_COMMIT" ]; then
  echo "pre-commit hook already exists, skipping..."
else
  cat > "$PRE_COMMIT" << 'EOF'
#!/bin/sh
bun run format
bun run tsc
EOF
  chmod +x "$PRE_COMMIT"
  echo "✓ Created pre-commit hook"
fi

# Setup commit-msg hook
if [ -f "$COMMIT_MSG" ]; then
  echo "commit-msg hook already exists, skipping..."
else
  cat > "$COMMIT_MSG" << 'EOF'
#!/bin/sh
bun run scripts/commit-lint.ts "$1"
EOF
  chmod +x "$COMMIT_MSG"
  echo "✓ Created commit-msg hook"
fi

echo "Git hooks setup complete!"
