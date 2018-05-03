/*

  Credits: This project directly inherits from eyas-ranjous/datastructures-js 🙏
  ----
  <T> Generics = is used instead of typescript's 'any'
  - https://www.typescriptlang.org/docs/handbook/generics.html
  - <T> (a Generic) insures an 'any' type is of the same type!
*/
class LinkedListNode<T> {
  private value: T
  // the next LinkedListNode
  private next: LinkedListNode<T>

  /*
    next
    - the next LinkedListNode || or null
    - it is null if it is the last LinkedListNode
  */
  constructor(value: T, next: LinkedListNode<T> | null) {
    this.value = value
    this.setNext(next)
  }

  getValue() {
    return this.value
  }

  setValue(value: string) {
    this.value = value
  }

  getNext() {
    return this.next
  }

  setNext(node: Object) {
    this.setNode(node, 'next')
  }

  setNode(node: Object, type: string) {
    this[type] = node instanceof LinkedList ? node : null
  }
}

export default LinkedList
