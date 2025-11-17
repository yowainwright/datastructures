#!/usr/bin/env bun

import { readdir, readFile, writeFile } from "node:fs/promises"
import { join, basename } from "node:path"
import { exec } from "node:child_process"
import { promisify } from "node:util"

const execAsync = promisify(exec)

const STRUCTURES_DIR = join(import.meta.dir, "../structures")
const README_PATH = join(import.meta.dir, "../README.md")

interface StructureStatus {
  name: string
  typescript: boolean
  go: boolean
  python: boolean
  tsTests: string
  goTests: string
  pyTests: string
  bigO: string
}

async function checkFileExists(path: string): Promise<boolean> {
  try {
    await Bun.file(path).text()
    return true
  } catch {
    return false
  }
}

async function runTests(structurePath: string, lang: "ts" | "go" | "python"): Promise<string> {
  try {
    let command = ""
    switch (lang) {
      case "ts":
        command = "bun test --bail"
        break
      case "go":
        command = "go test -v"
        break
      case "python":
        command = "python -m pytest -v"
        break
    }

    const { stdout, stderr } = await execAsync(command, {
      cwd: structurePath,
      timeout: 10000
    })

    if (lang === "ts") {
      const match = stdout.match(/(\d+) pass/)
      return match ? `✅ ${match[1]}` : "❌"
    } else if (lang === "go") {
      const match = stdout.match(/PASS/)
      const testCount = (stdout.match(/--- PASS:/g) || []).length
      return match ? `✅ ${testCount}` : "❌"
    } else {
      const match = stdout.match(/(\d+) passed/)
      return match ? `✅ ${match[1]}` : "❌"
    }
  } catch (error) {
    return "❌"
  }
}

async function extractBigO(structurePath: string): Promise<string> {
  const readmePath = join(structurePath, "README.md")
  const hasReadme = await checkFileExists(readmePath)

  if (!hasReadme) return "N/A"

  const content = await Bun.file(readmePath).text()
  const bigOMatch = content.match(/Big\s*O:?\s*([^\n]+)/i)
  return bigOMatch ? bigOMatch[1].trim() : "N/A"
}

async function getStructureStatus(): Promise<StructureStatus[]> {
  const entries = await readdir(STRUCTURES_DIR, { withFileTypes: true })
  const structures: StructureStatus[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const structurePath = join(STRUCTURES_DIR, entry.name)
    const name = entry.name

    const hasTS = await checkFileExists(join(structurePath, "index.ts"))
    const hasGo = await checkFileExists(join(structurePath, "main.go"))
    const hasPy = await checkFileExists(join(structurePath, "main.py"))

    let tsTests = "-"
    let goTests = "-"
    let pyTests = "-"

    if (hasTS) tsTests = await runTests(structurePath, "ts")
    if (hasGo) goTests = await runTests(structurePath, "go")
    if (hasPy) pyTests = await runTests(structurePath, "python")

    const bigO = await extractBigO(structurePath)

    structures.push({
      name,
      typescript: hasTS,
      go: hasGo,
      python: hasPy,
      tsTests,
      goTests,
      pyTests,
      bigO,
    })
  }

  return structures.sort((a, b) => a.name.localeCompare(b.name))
}

function generateMarkdownTable(structures: StructureStatus[]): string {
  const header = `
| Data Structure | TypeScript | Go | Python | TS Tests | Go Tests | Py Tests | Big O |
|----------------|------------|----|---------| ---------|----------|----------|-------|`

  const rows = structures.map(s => {
    const ts = s.typescript ? "✅" : "-"
    const go = s.go ? "✅" : "-"
    const py = s.python ? "✅" : "-"

    return `| ${s.name} | ${ts} | ${go} | ${py} | ${s.tsTests} | ${s.goTests} | ${s.pyTests} | ${s.bigO} |`
  })

  return [header, ...rows].join("\n")
}

async function updateReadme() {
  console.log("🔍 Scanning structures directory...")
  const structures = await getStructureStatus()

  console.log(`📊 Found ${structures.length} data structures`)

  const table = generateMarkdownTable(structures)

  const readme = await Bun.file(README_PATH).text()

  const START_MARKER = "<!-- STATUS_TABLE_START -->"
  const END_MARKER = "<!-- STATUS_TABLE_END -->"

  const startIndex = readme.indexOf(START_MARKER)
  const endIndex = readme.indexOf(END_MARKER)

  if (startIndex === -1 || endIndex === -1) {
    console.error("❌ Could not find status table markers in README.md")
    console.log("Please add the following markers to your README.md:")
    console.log(START_MARKER)
    console.log(END_MARKER)
    process.exit(1)
  }

  const before = readme.substring(0, startIndex + START_MARKER.length)
  const after = readme.substring(endIndex)

  const newReadme = `${before}\n${table}\n${after}`

  await writeFile(README_PATH, newReadme)

  console.log("✅ README.md updated successfully!")
  console.log("\nStatus Summary:")
  structures.forEach(s => {
    const langs = [
      s.typescript && "TS",
      s.go && "Go",
      s.python && "Py"
    ].filter(Boolean).join(", ")
    console.log(`  ${s.name}: ${langs || "none"}`)
  })
}

updateReadme().catch(console.error)
