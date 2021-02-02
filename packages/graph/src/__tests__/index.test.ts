import { vertex, graph } from '../index'

describe('graph', () => {
  describe('vertex', () => {
    test('init', () => {
      const result = vertex('foo')
      expect(result.key).toEqual('foo')
      expect(result.addSibling).toBeDefined()
    })
    test('siblings', () => {
      const result = vertex('foo').addSibling(vertex('bar'))
      expect(result.siblings.length).toEqual(1)
      expect(result.siblings[0].key).toEqual('bar')
    })
  })

  describe('graph', () => {
    test('init', () => {
      const result = graph()
      expect(result.directed).toEqual(false)
      expect(result.vertices).toEqual([])
      expect(result.edges).toEqual([])
    })

    test('directed', () => {
      const result = graph()
      expect(result.directed).toEqual(false)
    })

    test('andVertex', () => {
      const result = graph().addVertex('foo')
      expect(result.vertices.length).toEqual(1)
      expect(result.vertices[0].key).toEqual('foo')
    })

    test('addEdge', () => {
      const result = graph().addVertex('foo').addVertex('bar').addEdge('foo', 'bar')
      expect(result.edges[0]).toEqual('foo-bar')
    })
  })
})
