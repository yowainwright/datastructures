#!/usr/bin/env bun

/**
 * Interactive commit message prompt
 * Helps create properly formatted conventional commits
 */

import { stdin, stdout } from "process";
import { createInterface } from "readline";

const TYPES = [
  { value: "feat", description: "A new feature" },
  { value: "fix", description: "A bug fix" },
  { value: "docs", description: "Documentation only changes" },
  { value: "style", description: "Code style changes (formatting, etc)" },
  { value: "refactor", description: "Code refactoring" },
  { value: "test", description: "Adding or updating tests" },
  { value: "chore", description: "Maintenance tasks" },
  { value: "release", description: "Release commits" },
  { value: "revert", description: "Revert previous commit" },
];

const SCOPES = [
  "root",
  "avl-tree",
  "linked-list",
  "queue",
  "stack",
  "graph",
];

const rl = createInterface({
  input: stdin,
  output: stdout,
});

const question = (prompt: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
};

console.log("\nCreate a conventional commit message\n");

console.log("Available types:");
TYPES.forEach((type, index) => {
  console.log(`  ${index + 1}. ${type.value.padEnd(10)} - ${type.description}`);
});

const typeAnswer = await question("\nSelect type (1-9): ");
const typeIndex = parseInt(typeAnswer) - 1;

if (typeIndex < 0 || typeIndex >= TYPES.length) {
  console.error("Invalid type selection");
  rl.close();
  process.exit(1);
}

const selectedType = TYPES[typeIndex].value;

console.log("\nAvailable scopes:");
SCOPES.forEach((scope, index) => {
  console.log(`  ${index + 1}. ${scope}`);
});

const scopeAnswer = await question("\nSelect scope (1-6, or press Enter to skip): ");
const scopeIndex = scopeAnswer ? parseInt(scopeAnswer) - 1 : -1;
const selectedScope =
  scopeIndex >= 0 && scopeIndex < SCOPES.length ? SCOPES[scopeIndex] : "";

const message = await question("\nEnter commit message: ");

if (!message || message.trim().length === 0) {
  console.error("Commit message cannot be empty");
  rl.close();
  process.exit(1);
}

const commitMessage = selectedScope
  ? `${selectedType}(${selectedScope}): ${message}`
  : `${selectedType}: ${message}`;

console.log(`\n✨ Generated commit message:\n  ${commitMessage}\n`);

const confirm = await question("Proceed with commit? (y/n): ");

rl.close();

if (confirm.toLowerCase() === "y" || confirm.toLowerCase() === "yes") {
  const proc = Bun.spawn(["git", "commit", "-m", commitMessage], {
    stdout: "inherit",
    stderr: "inherit",
  });

  const exitCode = await proc.exited;
  process.exit(exitCode);
} else {
  console.log("Commit cancelled");
  process.exit(0);
}
