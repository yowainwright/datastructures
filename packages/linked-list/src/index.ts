import warn from '../../../utils/warn'
import * as Debug from 'debug'

import { Node } from './Node'

const error = Debug('Error:LinkedList:')

/**
 * LINKED LIST ⛓
 * ----
 * The Linked List Node is a Linear Structure of Nodes. Each node is a seperate object
 * represents a list of nodes containing information (values)
 */
class LinkedList<T> {
  public headNode: Node<T> | null
  public tailNode: Node<T> | null
  public debug: boolean

  constructor (headNode: Node<T> | null = null, debug: boolean = false) {
    this.headNode = headNode
    this.debug = debug
  }

  /**
   * appendNode
   * @param {string} name
   * @returns {Node} Node
   */
  appendNode (name: string): void {
    if (!this.headNode) {
      this.headNode = new Node(name)
      this.tailNode = this.headNode
    } else {
      const newNode = new Node(name)
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

  appendNodeAt (nodePosition: number, name: string): void {
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
  findNode (name: string): Node<T> {
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
      nodes.push(currentNode.name)
      currentNode = currentNode.nextNode
    }
    return nodes
  }

  getIndexOfNode (name: string): number {
    const list = this.toArray()
    return list.indexOf(name)
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

  constructNewList (names: string[]) {
    this.clear()
    return names.forEach(name => this.appendNode(name))
  }
}

export { LinkedList }
