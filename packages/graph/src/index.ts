/**
 * Graph 📈📉
 * ----
 * @description A collection of vertices and edges
 * @summary A collection of vertices related by edges
 * @note if you desire to add more functionality
 * - to this minimal Stack,
 * - submit a pull request
 */

export type Vertex = {
  key: unknown
  siblings: Vertex[]
  addSibling: (vertex: Vertex) => Vertex
}

export type GraphParams =
  | {
      directed?: boolean
      vertices?: Vertex[]
      edges?: unknown[]
    }
  | undefined

export type GraphRender = {
  directed: boolean
  vertices: Vertex[]
  edges: unknown[]
}
export type GraphFactory = {
  directed: boolean
  vertices: Vertex[]
  edges: unknown[]
  addVertex: (key: unknown) => GraphFactory
  getVertex: (key: unknown) => Vertex
  addEdge: (key1: unknown, key2: unknown) => GraphFactory
  render: () => GraphRender
  print: () => string
}

export type Graph = {
  directed: boolean
  vertices: Vertex[]
  edges: unknown[]
}

export const vertex = (key: unknown, siblings = []): Vertex => ({
  key,
  siblings,
  addSibling(vertex): Vertex {
    siblings.push(vertex)
    return this
  },
})

export const graph = ({ directed = false, vertices = [], edges = [] }: GraphParams = {}): GraphFactory => ({
  directed,
  vertices,
  edges,
  addVertex(key: unknown): GraphFactory {
    vertices.push(vertex(key))
    return this
  },
  getVertex: (key: unknown): Vertex => vertices.find((vertex) => vertex.key === key),
  addEdge(key1, key2): GraphFactory {
    const vertex1 = this.getVertex(key1)
    const vertex2 = this.getVertex(key2)

    vertex1.addSibling(vertex2)
    edges.push(`${key1}-${key2}`)

    if (!directed) {
      vertex2.addSibling(vertex1)
    }

    return this
  },
  render(): Graph {
    return {
      directed,
      vertices,
      edges,
    }
  },
  print: (): string =>
    vertices.reduce((str, { key, siblings }) => {
      const relationship = siblings?.length ? `${key} => ${siblings.map((sibling) => sibling.key).join(' ')}` : ''
      return [str, relationship].join('\n')
    }, ''),
})

// Quokka testing 💅
// -----------------
// const point = vertex('foo')
// const chart = graph().addVertex('foo').addVertex('bar')
// chart.addEdge('foo', 'bar')
// point
// const viewChart = chart.render()
// viewChart
// const printChart = chart.print()
// printChart
