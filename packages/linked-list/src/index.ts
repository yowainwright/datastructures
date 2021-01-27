/**
 * LINKED LIST ⛓
 * ----
 * @description a Linear Structure of Nodes
 */

export type NodeObject = {
  name: string
  data?: object | null
  nextNode?: NodeObject | null
} | null

export function Node(name: string, data: object | null = null, nextNode: NodeObject = null): NodeObject {
  return {
    name,
    data,
    nextNode,
  }
}

class LinkedList {
  public headNode: NodeObject
  public tailNode: NodeObject
  public debug: boolean

  constructor(headNode: NodeObject = null) {
    this.headNode = headNode
  }

  appendNode(name: string, data?: object | null): void {
    const newNode = Node(name, data)
    if (!this.headNode) {
      this.headNode = newNode
      this.tailNode = this.headNode
    } else {
      this.tailNode.nextNode = newNode
      this.tailNode = this.tailNode.nextNode
    }
  }

  removeNode(name: string): void {
    let currentNode = this.headNode
    while (currentNode !== null) {
      const previousNode = currentNode
      currentNode = currentNode.nextNode
      if (currentNode && currentNode.name === name) {
        previousNode.nextNode = currentNode.nextNode
        if (currentNode.name === this.tailNode.name) {
          this.tailNode = previousNode
        }
      }
    }
  }

  traverseList(callback: Function): void {
    let currentNode = this.headNode
    while (currentNode !== null) {
      callback(currentNode)
      currentNode = currentNode.nextNode
    }
  }

  appendNodeAt(nodePosition: number, name: string): void {
    const nodeArray = this.toArray()
    nodeArray.splice(nodePosition, 0, name)
    this.constructNewList(nodeArray)
  }

  reverseList(): void {
    const reversedListArray = this.toArray().reverse()
    this.constructNewList(reversedListArray)
  }

  findNode(name: string) {
    let currentNode = this.headNode.nextNode
    while (currentNode.name !== name) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  toArray() {
    let currentNode = this.headNode
    const nodes = []
    while (currentNode !== null) {
      nodes.push(currentNode)
      currentNode = currentNode.nextNode
    }
    return nodes
  }

  getIndexOfNode(name: string): number {
    const list = this.toArray()
    return list.map((o) => o.name).indexOf(name)
  }

  length(): number {
    return this.toArray().length
  }

  clear(): void {
    this.headNode = null
  }

  removeDuplicateNodes() {
    const nodeArray = this.toArray()
    const nodes = {}
    // eslint-disable-next-line no-prototype-builtins
    const filteredNodeArray = nodeArray.filter((names) => (nodes.hasOwnProperty(names) ? false : (nodes[names] = true)))
    return this.constructNewList(filteredNodeArray)
  }

  constructNewList(nodes: NodeObject[]) {
    this.clear()
    return Array.from(nodes, ({ name, data }) => this.appendNode(name, data))
  }
}

export { LinkedList }
