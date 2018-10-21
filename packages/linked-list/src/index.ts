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

  constructor (headNode: Node<T> | null = null) {
    this.headNode = headNode
  }

  /**
   * appendNode
   * @param {value} value
   */
  appendNode (value: T) {
    if (!this.headNode) return this.headNode = new Node(value)
    let currentNode = this.headNode
    while (currentNode.nextNode) currentNode = currentNode.nextNode
    return currentNode.nextNode = new Node(value)
  }

  /**
   * removeNode
   * @param {value} value
   */
  removeNode (value: T) {
    if (!value) return error('removeNode requires a value')
    let currentNode = this.headNode
    while (currentNode !== null) {
      let previousNode = currentNode
      currentNode = currentNode.nextNode
      if (currentNode.value === value) {
        previousNode.nextNode = currentNode.nextNode
      }
    }
  }

  /**
   * traverseList
   * TODO: better name
   * @param {function} callback
   */
  traverseList (callback: Function) {
    if (!callback || typeof callback !== 'function') {
      return error('traverse requires a callback')
    }
    let current = this.headNode
    while (current !== null) {
      callback(current)
      current = current.nextNode
    }
  }

  /**
   * appendNodeAt
   * @param {number} nodePosition
   * @param {value} value
   */
  appendNodeAt (nodePosition: number, value: T) {
    if (nodePosition >= this.length()) {
      return error('appendNodeAt requires an in-range position')
    }
    let counter = 0
    let current = this.headNode
    while (counter !== nodePosition) {
      current = current.nextNode
      counter += 1
    }
    return current.nextNode = new Node(value)
  }

  /**
   * reverseList
   */
  reverseList () {
    let current = this.headNode.nextNode
    let previousNode
    let nextNode
    while (current !== null) {
      nextNode = current.nextNode
      current.nextNode = previousNode
      previousNode = current
      current = nextNode
    }
    this.headNode.nextNode = previousNode
  }

  /**
   * findNode
   * @param {value} value
   */
  findNode (value: T) {
    let currentNode = this.headNode.nextNode
    while (currentNode.value !== value) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  /**
   * getNodePosition
   * gets the position (number) of a node with a certian value
   * @param {value} value
   */
  getNodePosition (value: T) {}

  /**
   * getHeadNode
   * @returns {headNode} Node
   */
  getHeadNode (): Node<T> | null {
    return this.headNode
  }

  /**
   * toArray
   * presents a linkedList as an array
   */
  toArray () {
    let currentNode = this.headNode
    let nodes = []
    while (currentNode !== null) {
      nodes.push(currentNode.value)
      currentNode = currentNode.nextNode
    }
    return nodes
  }

  /**
   * length
   * returns the length of a linkedList
   */
  length () {
    return this.toArray().length
  }

  /**
   * clear
   * clears a linkedList
   */
  clear () {
    const { nextNode } = this.headNode
    while (nextNode !== null) {
      this.removeNode(nextNode.value)
    }
    this.removeNode(this.headNode.value)
  }

  /**
   * removeDuplicateNodes
   * removes duplicateNodes
   */
  removeDuplicateNodes () {
    let currentNode = this.headNode
    let temp = []
    let previousNode = null
    while (currentNode.nextNode) {
      previousNode = currentNode
      currentNode = currentNode.nextNode
      if (!temp.includes(currentNode.value)) {
        temp.push(currentNode.value)
      } else {
        previousNode.nextNode = currentNode.nextNode
        currentNode = previousNode
      }
    }
  }
}

export { LinkedList }
