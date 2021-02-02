/**
 * Graph 📈📉
 * ----
 * @description 
 * @summary 
 * @note if you desire to add more functionality
 * - to this minimal Stack,
 * - submit a pull request
 */

expot type Vertex = {
  key: unknown
  siblings: unknown[]
  addSibling: (vertex: Vertex) => Vertex
}

export type GraphFactory = {
  directed: boolean
  vertices: Vertex[]
  edges: Vertex[]
  addVertex: (key: unknown) => GraphFactory
  getVertex: (key: unknown) => Vertex
  addEdge: (key1: unknown, key2: unknown) => GraphFactory
  render: () => any
  print: () => string
}

export const vertex = (key: unknown, siblings = []): Vertex => ({
  key,
  siblings,
  addSibling(vertex) {
    siblings.push(vertex)
    return this
  }
})

export const graph = ({ directed = false, vertices = [], edges = [] }) => ({
  directed,
  vertices,
  edges,
  addVertex(key: unknown) { 
    vertices.push(vertex(key))
    return this
  },
  getVertex: (key: unknown) => vertices.find(vertex => vertex.key === key),
  addEdge(key1, key2) { 
    const vertex1 = this.getVertex(key1)
    const vertex2 = this.getVertex(key2)

    vertex1.addSibling(vertex2)
    edges.push(`${key1}-${key2}`)

    if (!directed) { 
      vertex2.addSibling(vertex1)
    }

    return this
  },
  render() {
    return { 
      directed,
      vertices,
      edges,
    }
  },
  print: () => vertices.reduce((str, { key, siblings }) => { 
    console.log({ str, key, siblings })
    }, '').join('\n'),
})
