/**
 * Linked List Node
 */
export type NodeObject = {
  name: string,
  data?: object | null,
  nextNode?: NodeObject | null,
} | null


export const Node = (name: string, data: object | null = null, nextNode: NodeObject = null): NodeObject => ({
  name,
  data,
  nextNode,
})
