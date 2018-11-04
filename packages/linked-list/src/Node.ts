/**
 * Linked List Node
 */
class Node<T> {
  public name: string
  public nextNode: Node<T> | null
  public data: object | null

  /**
   * @param {string} name
   * @param {object} data
   */
  constructor (name: string, data: object | null = null, nextNode: Node<T> | null = null) {
    this.name = name
    this.data = data
    this.nextNode = nextNode
  }

  /**
   * @returns {string} value
   */
  getNodeValue (): string {
    return this.name
  }

  /**
   * getNodeData
   * returns the data of a Node
   * @returns {object} data
   */
  getNodeData (): object {
    return this.data
  }

  /**
   * getNextNode
   * returns nextNode
   * @returns {Node} this.nextNode
   */
  getNextNode (): Node<T> | null {
    return this.nextNode
  }

  /**
   * setNodeValue
   * sets a Node value
   * @param {value} value
   */
  setNodeValue (name: string): void {
    this.name = name
  }

  /**
   * @param {object} data
   */
  setNodeData (data: object): void {
    this.data = data
  }

  /**
   * @param {Node} nextNode
   */
  setNextNode (nextNode: Node<T> | null): void {
    this.nextNode = nextNode
  }
}

export { Node }
