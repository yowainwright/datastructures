/*
  This project directly inherits from eyas-ranjous/datastructures-js 🙏
*/

export default class Node<T> {
  private value: T
  private next: Node<T> | null

  constructor (value: T, next: Node<T> | null = null) {
    this.value = value
    this.next = next 
  }

  getValue (): T {
    return this.value
  }

  setValue (value: T): void {
    this.value = value
  }

  getNext (): Node<T> | null {
    return this.next
  }

  setNext (node: Node<T>): void {
    this.next = node
  }
}
