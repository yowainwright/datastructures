/**
 * Linked List Node
 */
export interface NodeInterface {
  name: string,
  data: object,
  nextNode: object,
}
export const Node = (name: string, data: object | null = null, nextNode: object | null = null): NodeInterface => ({
  name,
  data,
  nextNode,
})
