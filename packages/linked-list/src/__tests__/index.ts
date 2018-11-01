declare function test(msg: string, test: Function)
declare function expect (result: any)

import { LinkedList } from '..'
import { Node } from '../Node'

// test LinkedListNode(node)
test('LinkedList init', function testLinkedList () {
  const node = new Node('foo')
  const otherNode = new Node('bar')
  const list = new LinkedList(node)
  expect(list.headNode.value).toEqual('foo')
})

// test LinkedListNode .appendNode(value)
test('LinkedList appendNode', function appendNode () {
  const list = new LinkedList()
  list.appendNode('foo')
  expect(list.length()).toEqual(1)
  expect(list.headNode.value).toEqual('foo')
})

// test LinkedListNode .findNode(value)
test('LinkedList findNode', function findNode () {
  const list = new LinkedList()
  list.appendNode('foo')
  expect(list.length()).toEqual(1)
  expect(list.headNode.value).toEqual('foo')
  list.appendNode('bar')
  expect(list.length()).toEqual(2)
  const lastNode = list.findNode('bar')
  expect(lastNode.value).toEqual('bar')
})

// test LinkedListNode .removeNode(value)
test('LinkedList removeNode', function removeNode () {
  const list = new LinkedList()
  list.appendNode('foo')
  expect(list.length()).toEqual(1)
  expect(list.headNode.value).toEqual('foo')
  list.appendNode('bar')
  expect(list.length()).toEqual(2)
  list.removeNode('bar')
  expect(list.length()).toEqual(1)
  expect(list.headNode.value).toEqual('foo')
})

// test LinkedListNode .traverseList()
test('LinkedList traverseList', function traverseList () {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  expect(list.length()).toEqual(2)
  const addZzzToValue = (node) => node.value = `${node.value}zzz`
  list.traverseList(addZzzToValue)
  expect(list.headNode.value).toEqual('foozzz')
  const barzzz = list.findNode('barzzz')
  expect(barzzz.value).toEqual('barzzz')
})
