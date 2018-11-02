/**
 * Linked List Node
 */
class Node<T> {
  /**
   * @param {value} value
   * @param {Node} nexNode
   */
  public name: string
  public nextNode: Node<T> | null

  constructor (name: string, nextNode: Node<T> | null = null) {
    this.name = name
    this.nextNode = nextNode
  }

  /**
   * @returns {value} value
   */
  getNodeValue (): string {
    return this.name
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
  setNodeValue (name: string): void {
    this.name = name
  }

  /**
   * @returns {Node} this.nextNode
   */
  setNextNode (nextNode: Node<T> | null): void {
    this.nextNode = nextNode
  }
}

export { Node }
