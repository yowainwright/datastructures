#!/usr/bin/env bun

import Anthropic from "@anthropic-ai/sdk"
import { readFile, writeFile } from "fs/promises"
import { join } from "path"

interface DataStructureChallenge {
  name: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  operations: string[]
  timeComplexity: Record<string, string>
  spaceComplexity: string
  hints: string[]
  useCases: string[]
  typescript: {
    interface: string
    factoryFunction: string
  }
}

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY

if (!ANTHROPIC_API_KEY) {
  console.error("Error: ANTHROPIC_API_KEY environment variable is required")
  process.exit(1)
}

const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY })

async function loadExistingChallenges(): Promise<string[]> {
  try {
    const challengesFile = await readFile(
      join(process.cwd(), "challenges.json"),
      "utf-8"
    )
    const data = JSON.parse(challengesFile)
    return data.challenges.map((c: any) => c.name)
  } catch {
    return []
  }
}

async function generateChallenge(): Promise<DataStructureChallenge> {
  const existingChallenges = await loadExistingChallenges()

  console.log("Asking Claude to generate a new data structure challenge...\n")

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4000,
    messages: [
      {
        role: "user",
        content: `Generate a new data structure challenge for a biweekly coding practice project.

Existing data structures: ${existingChallenges.join(", ")}

Requirements:
- Choose an interesting data structure not in the existing list
- Vary difficulty (easy/medium/hard) to keep it engaging
- Include clear description, operations, hints, and complexity analysis
- Provide TypeScript type definitions and factory function pattern
- Focus on immutable, functional implementations
- Make it educational and fun!

Examples of data structures to consider:
- Hash Table / Hash Map
- Binary Heap (Min/Max)
- Trie (Prefix Tree)
- Disjoint Set (Union-Find)
- Binary Search Tree
- Red-Black Tree
- B-Tree
- Skip List
- Deque (Double-ended Queue)
- Priority Queue
- Bloom Filter
- LRU Cache
- Segment Tree
- Fenwick Tree (Binary Indexed Tree)

Respond with a JSON object matching this structure:
{
  "name": "kebab-case (e.g., 'hash-table', 'binary-heap')",
  "title": "Human readable title",
  "description": "Clear description of the data structure",
  "difficulty": "easy|medium|hard",
  "operations": ["operation1", "operation2", "operation3"],
  "timeComplexity": {
    "operation1": "O(1)",
    "operation2": "O(log n)",
    "operation3": "O(n)"
  },
  "spaceComplexity": "O(n)",
  "hints": ["hint 1", "hint 2", "hint 3"],
  "useCases": ["use case 1", "use case 2"],
  "typescript": {
    "interface": "export type DataStructureName = {\\n  operation1: (param: Type) => DataStructureName\\n  operation2: () => ReturnType\\n}",
    "factoryFunction": "export const dataStructureName = (initialState: Type = defaultValue): DataStructureName => ({\\n  operation1(param: Type): DataStructureName {\\n    // TODO: implement\\n    return dataStructureName(initialState)\\n  },\\n  operation2(): ReturnType {\\n    // TODO: implement\\n    return result\\n  }\\n})"
  }
}

Only respond with the JSON object, no other text.`,
      },
    ],
  })

  const content = message.content[0]
  if (content.type !== "text") {
    throw new Error("Unexpected response type from Claude")
  }

  const jsonMatch = content.text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) {
    throw new Error("Could not parse JSON from Claude response")
  }

  return JSON.parse(jsonMatch[0])
}

async function updateChallengesJson(challenge: DataStructureChallenge) {
  const challengesPath = join(process.cwd(), "challenges.json")
  let challengesData

  try {
    const existing = await readFile(challengesPath, "utf-8")
    challengesData = JSON.parse(existing)
  } catch {
    challengesData = { challenges: [] }
  }

  challengesData.challenges.push({
    name: challenge.name,
    title: challenge.title,
    description: challenge.description,
    difficulty: challenge.difficulty,
    completed: false,
  })

  await writeFile(challengesPath, JSON.stringify(challengesData, null, 2))
}

async function main() {
  try {
    const challenge = await generateChallenge()

    console.log("\nGenerated Challenge:")
    console.log(`Title: ${challenge.title}`)
    console.log(`Name: ${challenge.name}`)
    console.log(`Difficulty: ${challenge.difficulty}`)
    console.log(`\nOperations: ${challenge.operations.join(", ")}`)

    console.log("\nCreating data structure with generator script...")
    console.log(
      `Run: bun run create ${challenge.name} to scaffold the package\n`
    )

    await updateChallengesJson(challenge)

    const detailsPath = join(
      process.cwd(),
      `challenge-${challenge.name}.json`
    )
    await writeFile(detailsPath, JSON.stringify(challenge, null, 2))

    console.log(
      `Challenge details saved to: challenge-${challenge.name}.json\n`
    )
    console.log("Next steps:")
    console.log(`1. Run: bun run create ${challenge.name}`)
    console.log(
      `2. Implement the data structure using the details in challenge-${challenge.name}.json`
    )
    console.log("3. Create a visual demo in the app")
    console.log("\nGood luck!\n")
  } catch (error) {
    console.error("Error generating data structure:", error)
    process.exit(1)
  }
}

main()
