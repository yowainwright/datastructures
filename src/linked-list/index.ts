/*
  This project directly inherits from eyas-ranjous/datastructures-js 🙏
*/

export default class LinkedList {
  constructor (public value: string, public next: Object) {
    this.value = value
    this.setNext(next)
  }

  getValue () {
    return this.value
  }

  setValue (value: string) {
    this.value = value
  }

  getNext () {
    return this.next
  }

  setNext (node: Object) {
    this.setNode(node, 'next')
  }

  setNode (node: Object, type: string) {
    this[type] = node instanceof LinkedList ? node : null
  }
}
