/**
 * Linked List Node
 * ----
 * represents a node containing information called a value
 * it may also provide information about the next node (sibling node)
 */
class Node<T> {
  /**
   * @param value
   * the value of the linked list node
   */
  /**
   * @param nextNode
   * the next LinkedListNode || or null
   * it is null if it is the last LinkedListNode
   */
  public value: T
  public nextNode: Node<T> | null

  constructor (value: T, nextNode: Node<T> | null = null) {
    this.value = value
    this.nextNode = nextNode
  }

  /**
   * @returns the linked list node value
   */
  getNodeValue (): T {
    return this.value
  }

  /**
   * @returns the next list node
   */
  getNextNode (): Node<T> | null {
    return this.nextNode
  }

  /**
   * sets the linked list node value
   */
  setNodeValue (value: T): void {
    this.value = value
  }

  /**
   * sets the linked list node value
   */
  setNextNode (nextNode: Node<T> | null): void {
    this.nextNode = nextNode
  }
}

export { Node }
