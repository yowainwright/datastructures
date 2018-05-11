/**
 * LINKED LIST ⛓
 * The Linked List Node is a Linear Structure of Nodes. Each node is a seperate object
 * Credits: This project directly inherits from eyas-ranjous/datastructures-js 🙏
 */

/**
 * Linked List Node
 * represents a node containing information called a value
 * it may also provide information about the next node (sibling node)
 */
class LinkedListNode<T> {
  /**
   * @param value
   * the value of the linked list node
   */
  /**
   * @param nextNode
   * the next LinkedListNode || or null
   * it is null if it is the last LinkedListNode
   */
  private value: T
  private nextNode: LinkedListNode<T> | null

  constructor (value: T, nextNode: LinkedListNode<T> | null = null) {
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
   * sets the linked list node value
   */
  setNodeValue (value: T): void {
    this.value = value
  }

  /**
   * @returns the next list node
   */
  getNextNode (): LinkedListNode<T> | null {
    return this.nextNode
  }

  /**
   * sets the linked list node value
   */
  setNextNode (nextNode: LinkedListNode<T>): void {
    this.nextNode = nextNode
  }
}

/**
 * Linked List
 * represents a list of nodes containing information (values)
 */
class LinkedList<T> {
  /**
   * @param headNode
   * the value of the first linked list node
   */
  /**
   * @param nodeCount
   * the number of nodes within the Linked List
   */
  private headNode: LinkedListNode<T> | null
  private nodeCount: number

  constructor (
    nodeCount: number | 0,
    headNode: LinkedListNode<T> | null = null,
  ) {
    this.nodeCount = nodeCount
    this.headNode = headNode
  }

  /**
   * @param value value
   * adds a new node to the beginning of the linkedList
   */
  addFirstNode (value: T) {
    this.headNode = this.headNode
      ? new LinkedListNode(this.headNode.getNodeValue())
      : new LinkedListNode(value)
    this.nodeCount = this.nodeCount + 1
  }

  /**
   * @param value of node
   * @param LinkedListNode
   * addLast adds a Linked List Node last
   */
  addLast (value: T, lastNode = this.headNode): void {
    if (lastNode === null) {
      this.headNode = new LinkedListNode(value)
      this.nodeCount = this.nodeCount + 1
    } else if (lastNode.getNextNode() === null) {
      lastNode.setNextNode(new LinkedListNode(value))
      this.nodeCount = this.nodeCount + 1
    } else this.addLast(value, lastNode.getNextNode())
  }

  /**
   * @returns a linked list node
   */
  find (value: T, current = this.headNode): LinkedListNode<T> | null {
    if (current === null) return null
    else if (current.getNodeValue() === value) return current
    else return this.find(value, current.getNextNode())
  }

  /**
   * updates the head node value
   */
  updateHeadNode (value: T): void {
    this.headNode = this.headNode
      ? new LinkedListNode(this.headNode.getNodeValue())
      : new LinkedListNode(value)
    this.nodeCount = this.nodeCount + 1
  }

  /**
   * @returns the headNode
   */
  getHeadNode (): LinkedListNode<T> | null {
    return this.headNode
  }

  /**
   * @returns the node code
   */
  getNodeCount (): number {
    return this.nodeCount
  }
}

export { LinkedListNode, LinkedList }
