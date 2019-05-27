import warn from '../../../utils/warn'
import { Node, NodeInterface } from './Node'

/**
 * LINKED LIST ⛓
 * ----
 * The Linked List Node is a Linear Structure of Nodes. Each node is a seperate object
 * represents a list of nodes containing information (values)
 */
class LinkedList<T> {
  public headNode: any
  public tailNode: any
  public debug: boolean

  constructor (headNode: any | null = null, debug: boolean = false) {
    this.headNode = headNode
    this.debug = debug
  }

  /**
   * appendNode
   * @param {string} name
   * @returns {Node} Node
   */
  appendNode (name: string, data?: object | null): void {
    const newNode = Node(name, data)
    if (!this.headNode) {
      this.headNode = newNode
      this.tailNode = this.headNode
    } else {
      const tailNode = this.tailNode.nextNode
      this.tailNode.nextNode = newNode
      this.tailNode = this.tailNode.nextNode
    }
  }

  /**
   * removeNode
   * @param {string} name
   */
  removeNode (name: string): void {
    if (this.debug && !name) return warn('removeNode requires a value')
    let currentNode = this.headNode
    while (currentNode !== null) {
      let previousNode = currentNode
      currentNode = currentNode.nextNode
      if (currentNode && currentNode.name === name) {
        previousNode.nextNode = currentNode.nextNode
        if (currentNode.name === this.tailNode.name) {
          this.tailNode = previousNode
        }
      }
    }
  }

  /**
   * traverseList
   * @param {function} callback
   */
  traverseList (callback: Function): void {
    if (this.debug && !callback || typeof callback !== 'function') {
      return warn('traverse requires a callback')
    }
    let currentNode = this.headNode
    while (currentNode !== null) {
      callback(currentNode)
      currentNode = currentNode.nextNode
    }
  }

  appendNodeAt (nodePosition: number, name: string, data?: object | null): void {
    if (this.debug && nodePosition >= this.length()) {
      return warn('appendNodeAt requires an in-range position')
    }
    const nodeArray = this.toArray()
    nodeArray.splice(nodePosition, 0, name)
    this.constructNewList(nodeArray)
  }

  /**
   * reverseList
   */
  reverseList (): void {
    const reversedListArray = this.toArray().reverse()
    this.constructNewList(reversedListArray)
  }

  /**
   * findNode
   * @param {value} value
   */
  findNode (name: string) {
    let currentNode = this.headNode.nextNode
    while (currentNode.name !== name) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  /**
   * toArray
   * presents a linkedList as an array
   */
  toArray () {
    let currentNode = this.headNode
    let nodes = []
    while (currentNode !== null) {
      nodes.push(currentNode)
      currentNode = currentNode.nextNode
    }
    return nodes
  }

  getIndexOfNode (name: string): number {
    const list = this.toArray()
    return list.map(o => o.name).indexOf(name)
  }

  /**
   * length
   * returns the length of a linkedList
   */
  length (): number {
    return this.toArray().length
  }

  /**
   * clear
   * clears a linkedList
   */
  clear (): void {
    this.headNode = null
  }

  /**
   * removeDuplicateNodes
   * removes duplicateNodes
   */
  removeDuplicateNodes () {
    const nodeArray = this.toArray()
    const nodes = {}
    const filteredNodeArray = nodeArray
      .filter(names => nodes.hasOwnProperty(names)
        ? false
        : (nodes[names] = true))
    return this.constructNewList(filteredNodeArray)
  }

  constructNewList (nodes: any) {
    this.clear()
    return nodes.forEach(({ name, data }) => this.appendNode(name, data || null))
  }
}

export { LinkedList }
