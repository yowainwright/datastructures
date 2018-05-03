/*
  Credits: This project directly inherits from eyas-ranjous/datastructures-js 🙏
  ----
  <T> Generics = is used instead of typescript's 'any'
  - https://www.typescriptlang.org/docs/handbook/generics.html
  - <T> (a Generic) insures an 'any' type is of the same type!
*/
class LinkedListNode<T> {
  /*
    value
    - the value of the node
    - (the current LinkedListNode)
    nextNode
    - the next LinkedListNode || or null
    - it is null if it is the last LinkedListNode
  */
  private value: T
  private nextNode: LinkedListNode<T> | null

  constructor (value: T, nextNode: LinkedListNode<T> | null = null) {
    this.value = value
    this.nextNode = nextNode
  }

  // gets value of the current node
  getNodeValue (): T {
    return this.value
  }

  // :void means that there will be no return value
  // sets the value of the current LinkedListNode
  setValue (value: T): void {
    this.value = value
  }

  // gets the next Linkded
  getNextNode (): LinkedListNode<T> | null {
    return this.nextNode
  }

  // sets the next node
  setNextNode (nextNode: LinkedListNode<T>): void {
    this.nextNode = nextNode
  }
}

export default LinkedListNode
