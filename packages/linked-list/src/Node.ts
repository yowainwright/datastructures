/**
 * Linked List Node
 */
export const Node = (name: string, nextNode: object | null = null, data: object | null = null) => ({
  name,
  nextNode,
  data,
})
