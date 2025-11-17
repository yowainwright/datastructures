#!/usr/bin/env bun

/**
 * Custom commit message linter
 * Validates commit messages according to conventional commit format
 */

const VALID_TYPES = [
  "chore",
  "feat",
  "fix",
  "docs",
  "style",
  "refactor",
  "test",
  "release",
  "revert",
] as const;

const VALID_SCOPES = [
  "root",
  "avl-tree",
  "linked-list",
  "queue",
  "stack",
  "graph",
  "components",
  "scripts",
] as const;

const MAX_HEADER_LENGTH = 120;

const commitMessageFile = process.argv[2];

if (!commitMessageFile) {
  console.error("Error: No commit message file provided");
  process.exit(1);
}

const commitMessage = await Bun.file(commitMessageFile).text();
const firstLine = commitMessage.trim().split("\n")[0];

const commitRegex = /^(\w+)(?:\(([^)]+)\))?: (.+)$/;
const match = firstLine.match(commitRegex);

const errors: string[] = [];

if (!match) {
  errors.push(
    "Commit message must follow format: type(scope): message"
  );
} else {
  const [, type, scope, message] = match;

  if (!VALID_TYPES.includes(type as any)) {
    errors.push(
      `Invalid type "${type}". Must be one of: ${VALID_TYPES.join(", ")}`
    );
  }

  if (scope && !VALID_SCOPES.includes(scope as any)) {
    errors.push(
      `Invalid scope "${scope}". Must be one of: ${VALID_SCOPES.join(", ")}`
    );
  }

  if (!message || message.trim().length === 0) {
    errors.push("Commit message cannot be empty");
  }
}

if (firstLine.length > MAX_HEADER_LENGTH) {
  errors.push(
    `Header exceeds ${MAX_HEADER_LENGTH} characters (currently ${firstLine.length})`
  );
}

if (errors.length > 0) {
  console.error("\n❌ Commit message validation failed:\n");
  errors.forEach((error) => console.error(`  • ${error}`));
  console.error("\nYour commit message:");
  console.error(`  ${firstLine}\n`);
  process.exit(1);
}

console.log("✅ Commit message is valid");
process.exit(0);
