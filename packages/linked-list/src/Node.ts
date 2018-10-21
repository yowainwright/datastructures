/**
 * Linked List Node
 */
class Node<T> {
  /**
   * @param {value} value
   * @param {Node} nexNode
   */
  public value: T
  public nextNode: Node<T> | null

  constructor (value: T, nextNode: Node<T> | null = null) {
    this.value = value
    this.nextNode = nextNode
  }

  /**
   * @returns {value} value
   */
  getNodeValue (): T {
    return this.value
  }

  /**
   * @returns {Node} this.nextNode
   */
  getNextNode (): Node<T> | null {
    return this.nextNode
  }

  /**
   * @param {value} value
   */
  setNodeValue (value: T): void {
    this.value = value
  }

  /**
   * @returns {Node} this.nextNode
   */
  setNextNode (nextNode: Node<T> | null): void {
    this.nextNode = nextNode
  }
}

export { Node }
