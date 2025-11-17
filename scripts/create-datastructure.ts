#!/usr/bin/env bun

/**
 * Generator script to create a new data structure package and demo app
 * Usage: bun run create <name>
 */

import { existsSync, mkdirSync, writeFileSync } from "fs"
import { join } from "path"

const name = process.argv[2]

if (!name) {
  console.error("Error: Please provide a data structure name")
  console.log("Usage: bun run create <name>")
  console.log("Example: bun run create binary-tree")
  process.exit(1)
}

const kebabCase = name.toLowerCase().replace(/\s+/g, "-")
const pascalCase = kebabCase
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join("")
const titleCase = kebabCase
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ")

const packagesDir = join(process.cwd(), "packages", kebabCase)
const appsDir = join(process.cwd(), "apps", `${kebabCase}-demo`)

// Check if already exists
if (existsSync(packagesDir)) {
  console.error(`Error: Package ${kebabCase} already exists`)
  process.exit(1)
}

if (existsSync(appsDir)) {
  console.error(`Error: App ${kebabCase}-demo already exists`)
  process.exit(1)
}

console.log(`Creating data structure: ${titleCase}`)
console.log(`  Package: packages/${kebabCase}`)
console.log(`  App: apps/${kebabCase}-demo`)

// Create package structure
mkdirSync(packagesDir, { recursive: true })
mkdirSync(join(packagesDir, "src"), { recursive: true })
mkdirSync(join(packagesDir, "tests"), { recursive: true })

// Package: package.json
const packageJson = {
  name: `@datastructures/${kebabCase}`,
  version: "0.0.1",
  description: `A minimal functional typed implementation of ${titleCase}`,
  main: "dist/",
  unpkg: "dist/index.js",
  module: "dist/index.js",
  types: "index.ts",
  publishConfig: {
    access: "public",
  },
  scripts: {
    build: "tsc",
    clean: "rimraf dist",
    tsc: "tsc --noEmit",
    test: "bun test",
  },
  repository: {
    type: "git",
    url: "git@github.com:yowainwright/datastructures.git",
  },
  keywords: [kebabCase, "data structures", titleCase.toLowerCase()],
  author: "Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)",
  license: "MIT",
}

writeFileSync(
  join(packagesDir, "package.json"),
  JSON.stringify(packageJson, null, 2)
)

// Package: tsconfig.json
const packageTsConfig = {
  extends: "../../tsconfig.json",
  compilerOptions: {
    outDir: "./dist",
    rootDir: "./src",
    declaration: true,
    declarationMap: true,
  },
  include: ["src/**/*"],
  exclude: ["node_modules", "dist", "tests"],
}

writeFileSync(
  join(packagesDir, "tsconfig.json"),
  JSON.stringify(packageTsConfig, null, 2)
)

// Package: src/index.ts
const camelCase = kebabCase.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
const packageIndex = `/**
 * ${titleCase}
 * ----
 * @description ${titleCase} data structure implementation
 * @summary a typed functional ${titleCase}
 */

export type ${pascalCase}List = {
  // Add your methods here
  print: () => unknown[]
}

export const ${camelCase} = (list: unknown[] = []): ${pascalCase}List => ({
  print: (): unknown[] => [...list],
})
`

writeFileSync(join(packagesDir, "src", "index.ts"), packageIndex)

// Package: tests/index.test.ts
const packageTest = `import { describe, expect, test } from "bun:test"
import { ${camelCase} } from "../src/index"

describe("${titleCase}", () => {
  test("should create a new ${titleCase}", () => {
    const ds = ${camelCase}()
    expect(ds).toBeDefined()
  })

  test("should print empty list initially", () => {
    const ds = ${camelCase}()
    expect(ds.print()).toEqual([])
  })
})
`

writeFileSync(join(packagesDir, "tests", "index.test.ts"), packageTest)

// Create app structure
mkdirSync(appsDir, { recursive: true })
mkdirSync(join(appsDir, "src"), { recursive: true })
mkdirSync(join(appsDir, "tests"), { recursive: true })

// App: package.json
const appPackageJson = {
  name: `@datastructures/${kebabCase}-demo`,
  version: "0.0.1",
  private: true,
  type: "module",
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    preview: "vite preview",
    test: "bun test",
  },
  dependencies: {
    [`@datastructures/${kebabCase}`]: "workspace:*",
    "@datastructures/components": "workspace:*",
  },
  devDependencies: {
    autoprefixer: "^10.4.20",
    postcss: "^8.4.49",
    tailwindcss: "^3.4.17",
    typescript: "^5.7.2",
    vite: "^6.0.5",
  },
}

writeFileSync(
  join(appsDir, "package.json"),
  JSON.stringify(appPackageJson, null, 2)
)

// App: tsconfig.json
const appTsConfig = {
  compilerOptions: {
    target: "ES2020",
    useDefineForClassFields: true,
    module: "ESNext",
    lib: ["ES2020", "DOM", "DOM.Iterable"],
    skipLibCheck: true,
    moduleResolution: "bundler",
    allowImportingTsExtensions: true,
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,
    strict: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noFallthroughCasesInSwitch: true,
  },
  include: ["src"],
}

writeFileSync(join(appsDir, "tsconfig.json"), JSON.stringify(appTsConfig, null, 2))

// App: tailwind.config.js
const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
`

writeFileSync(join(appsDir, "tailwind.config.js"), tailwindConfig)

// App: postcss.config.js
const postcssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`

writeFileSync(join(appsDir, "postcss.config.js"), postcssConfig)

// App: index.html
const indexHtml = `<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${titleCase} Demo</title>
  </head>
  <body class="bg-slate-900 text-slate-100 min-h-screen p-8">
    <div class="max-w-4xl mx-auto">
      <header class="text-center mb-8">
        <h1 class="text-6xl font-bold mb-2 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          ${titleCase}
        </h1>
        <p class="text-slate-400 text-lg">Data Structure Visualization</p>
      </header>

      <div class="bg-slate-800 p-6 rounded-xl mb-8">
        <div id="controls" class="flex gap-4 flex-wrap"></div>
      </div>

      <div class="bg-slate-800 p-8 rounded-xl mb-8 min-h-[400px]">
        <div id="visualization" class="flex flex-col gap-2 items-center">
          <div class="text-slate-400 italic py-12 text-center">Start interacting</div>
        </div>
      </div>

      <div class="bg-slate-800 p-6 rounded-xl">
        <h3 class="mb-4 text-slate-400 text-sm uppercase tracking-wider">Operations Log</h3>
        <div id="log" class="max-h-[200px] overflow-y-auto"></div>
      </div>
    </div>

    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`

writeFileSync(join(appsDir, "index.html"), indexHtml)

// App: src/style.css
const styleCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .animate-slide-in {
    animation: slideIn 0.3s ease-out;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`

writeFileSync(join(appsDir, "src", "style.css"), styleCss)

// App: src/main.ts
const mainTs = `import { ${camelCase} } from "@datastructures/${kebabCase}"
import { createButton, createInput } from "@datastructures/components"
import "./style.css"

const controlsEl = document.getElementById("controls")!
const visualizationEl = document.getElementById("visualization")!
const logEl = document.getElementById("log")!

let ds = ${camelCase}()

const addLog = (message: string) => {
  const entry = document.createElement("div")
  entry.className =
    "p-2 font-mono text-sm text-slate-400 border-l-2 border-slate-600 pl-4 mb-2 animate-slide-in"
  const timestamp = new Date().toLocaleTimeString()
  entry.textContent = \`[\${timestamp}] \${message}\`
  logEl.insertBefore(entry, logEl.firstChild)

  if (logEl.children.length > 10) {
    logEl.removeChild(logEl.lastChild!)
  }
}

const updateVisualization = () => {
  const items = ds.print()

  if (items.length === 0) {
    visualizationEl.innerHTML = \`
      <div class="text-slate-400 italic py-12 text-center">
        ${titleCase} is empty
      </div>
    \`
  } else {
    visualizationEl.innerHTML = items
      .map(
        (item, index) => \`
        <div class="w-full max-w-md bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 rounded-lg flex justify-between items-center animate-slide-in shadow-lg">
          <span class="font-semibold text-lg">\${item}</span>
          <span class="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">\${index}</span>
        </div>
      \`
      )
      .join("")
  }
}

// Example controls - customize these for your data structure
const input = createInput({
  placeholder: "Enter value...",
  onEnter: (value) => {
    if (!value.trim()) return
    addLog(\`Added: \${value}\`)
    // TODO: Implement add functionality
    // ds = ds.add(value)
    updateVisualization()
  },
})

const addBtn = createButton({
  text: "Add",
  onClick: () => {
    const value = (input as HTMLInputElement).value.trim()
    if (!value) return
    addLog(\`Added: \${value}\`)
    // TODO: Implement add functionality
    // ds = ds.add(value)
    updateVisualization()
    ;(input as HTMLInputElement).value = ""
  },
})

const clearBtn = createButton({
  text: "Clear",
  variant: "secondary",
  onClick: () => {
    ds = ${camelCase}()
    addLog("Cleared ${titleCase}")
    updateVisualization()
  },
})

const inputGroup = document.createElement("div")
inputGroup.className = "flex gap-2 flex-1 min-w-[250px]"
inputGroup.appendChild(input)
inputGroup.appendChild(addBtn)

controlsEl.appendChild(inputGroup)
controlsEl.appendChild(clearBtn)

updateVisualization()
addLog("${titleCase} initialized")
`

writeFileSync(join(appsDir, "src", "main.ts"), mainTs)

// App: tests/demo.test.ts
const appTest = `import { describe, expect, test } from "bun:test"

describe("${titleCase} Demo", () => {
  test("demo app exists", () => {
    expect(true).toBe(true)
  })
})
`

writeFileSync(join(appsDir, "tests", "demo.test.ts"), appTest)

console.log("\nSuccessfully created:")
console.log(`  packages/${kebabCase}`)
console.log(`  apps/${kebabCase}-demo`)
console.log("\nNext steps:")
console.log("  1. Run: bun install")
console.log(`  2. Implement: packages/${kebabCase}/src/index.ts`)
console.log(`  3. Visualize: apps/${kebabCase}-demo/src/main.ts`)
console.log(`  4. Start dev: cd apps/${kebabCase}-demo && bun run dev`)
