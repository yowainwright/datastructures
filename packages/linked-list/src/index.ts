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
   * @returns {Node} Node
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
      if (currentNode && currentNode.value === value) {
        previousNode.nextNode = currentNode.nextNode
      }
    }
  }

  /**
   * traverseList
   * @param {function} callback
   */
  traverseList (callback: Function) {
    if (!callback || typeof callback !== 'function') {
      return error('traverse requires a callback')
    }
    let currentNode = this.headNode
    while (currentNode !== null) {
      callback(currentNode)
      currentNode = currentNode.nextNode
    }
  }

  appendNodeAt (nodePosition: number, value: T) {
    if (nodePosition >= this.length()) {
      return error('appendNodeAt requires an in-range position')
    }
    const nodeArray = this.toArray()
    nodeArray.splice(nodePosition, 0, value)
    return this.constructNewList(nodeArray)
  }

  /**
   * reverseList
   */
  reverseList () {
    const reversedListArray = this.toArray().reverse()
    return this.constructNewList(reversedListArray)
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

  getIndexOfNode (value: T) {
    const list = this.toArray()
    return list.indexOf(value)
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
      .filter(values => nodes.hasOwnProperty(values)
        ? false
        : (nodes[values] = true))
    return this.constructNewList(filteredNodeArray)
  }

  constructNewList (values: Array<T>) {
    this.clear()
    return values.forEach(value => this.appendNode(value))
  }
}

export { LinkedList }
