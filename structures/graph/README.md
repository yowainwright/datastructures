# @datastructures/graph 📈📉

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40datastructures%2Fgraph.svg)](https://badge.fury.io/js/%40datastructures%2Fgraph)

#### A minimal functional typed implementation of a graph. 🦄

A collection of vertices related by edges

---

## Install

```sh
yarn add @datastructures/graph -D
```

---
## Usage

```typescript
import { graph, vertex } from '@datastructures/graph'
const chart = graph().addVertex('foo').addVertex('bar')
chart.addEdge('foo', 'bar')
const viewChart = chart.render()
// => { directed: false, vertices: [ { key: 'foo', ...}, { key: 'bar', ...} ], edges: ['foo-bar' ]}
const printChart = chart.print()
```

---

## API

#### `Vertex`
A individual vertice

**`key`:** a string vertex identifier

**`siblings`:** an array of vertices

**`addSibling`:** a methode for adding siblings to a vertex

> **ex:** const item = vertex('foo').addSibling('bar')


#### `Methods`

**`addVertex`:** adds a vertex to the graph

> **ex:** const chart = graph().addVertex('foo')

**`addEdge`:** adds an edge to the Graph

> **ex:** const chart = graph().addVertex('foo').addEdge('bar').addEdge('foo', 'bar')

**`render`:** renders the graph

> **ex:** const chart = graph().addVertex('foo').addEdge('bar').addEdge('foo', 'bar').render()

**`print`:** renders a string output of the graph

> **ex:** const chart = graph().addVertex('foo').addEdge('bar').addEdge('foo', 'bar').print()


---

## Data Structures 🦄

#### Basic. Functional. Typed. Data Structures.

Functional typed data structures offering structure clarity and simplicity.

---

#### View other [data structures](https://github.com/yowainwright/data-structures).

