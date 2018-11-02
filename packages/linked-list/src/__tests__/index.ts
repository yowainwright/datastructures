declare function test(msg: string, test: Function)
declare function expect (result: any)

import { LinkedList } from '..'
import { Node } from '../Node'

// test LinkedListNode(node)
test('LinkedList init', function testLinkedList () {
  const node = new Node('foo')
  const otherNode = new Node('bar')
  const list = new LinkedList(node)
  expect(list.headNode.name).toEqual('foo')
})

// test LinkedListNode .appendNode(name)
test('LinkedList appendNode', function appendNode () {
  const list = new LinkedList()
  list.appendNode('foo')
  expect(list.length()).toEqual(1)
  expect(list.headNode.name).toEqual('foo')
  list.appendNode('bar')
  expect(list.length()).toEqual(2)
  expect(list.tailNode.name).toEqual('bar')
})

// test LinkedListNode .findNode(name)
test('LinkedList findNode', function findNode () {
  const list = new LinkedList()
  list.appendNode('foo')
  expect(list.length()).toEqual(1)
  expect(list.headNode.name).toEqual('foo')
  list.appendNode('bar')
  expect(list.length()).toEqual(2)
  const lastNode = list.findNode('bar')
  expect(lastNode.name).toEqual('bar')
})

// test LinkedListNode .removeNode(name)
test('LinkedList removeNode', function removeNode () {
  const list = new LinkedList()
  list.appendNode('foo')
  expect(list.length()).toEqual(1)
  expect(list.headNode.name).toEqual('foo')
  list.appendNode('bar')
  expect(list.length()).toEqual(2)
  list.removeNode('bar')
  expect(list.length()).toEqual(1)
  expect(list.headNode.name).toEqual('foo')
})

// test LinkedListNode .traverseList()
test('LinkedList traverseList', function traverseList () {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  expect(list.length()).toEqual(2)
  const addZzzToname = (node) => node.name = `${node.name}zzz`
  list.traverseList(addZzzToname)
  expect(list.headNode.name).toEqual('foozzz')
  const barzzz = list.findNode('barzzz')
  expect(barzzz.name).toEqual('barzzz')
})

// test LinkedListNode .appendNodeAt()
test('LinkedList appendNodeAt', function appendNodeAt () {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  list.appendNode('biz')
  list.appendNodeAt(2, 'baz')
  const result = list.toArray()
  expect(result).toEqual(['foo', 'bar', 'baz', 'biz'])
})

// test LinkedListNode .reverseList()
test('LinkedList reverseList', function reverseList () {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  list.appendNode('biz')
  list.reverseList()
  const reversed = list.toArray()
  expect(reversed).toEqual(['biz', 'bar', 'foo'])
})

// test LinkedListNode .toArray()
test('LinkedList toArray', function toArray () {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  list.appendNode('biz')
  const array = list.toArray()
  expect(array).toEqual(['foo', 'bar', 'biz'])
})

// test LinkedListNode .toArray()
test('LinkedList toArray', function toArray () {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  list.appendNode('biz')
  const array = list.toArray()
  expect(array).toEqual(['foo', 'bar', 'biz'])
})

// test LinkedListNode .getIndexOfNode()
test('LinkedList getIndexOfNode', function getIndexOfNode () {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  list.appendNode('biz')
  list.getIndexOfNode('bar')
  expect(list.getIndexOfNode('bar')).toEqual(1)
})

// test LinkedListNode .length()
test('LinkedList length', function length() {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  list.appendNode('biz')
  expect(list.length()).toEqual(3)
})

// test LinkedListNode .clear()
test('LinkedList clear', function clear() {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  list.appendNode('biz')
  list.clear()
  expect(list.headNode).toEqual(null)
})

// test LinkedListNode .clear()
test('LinkedList clear', function clear() {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  list.appendNode('biz')
  list.clear()
  expect(list.headNode).toEqual(null)
})

test('LinkedList removeDuplicateNodes', function removeDuplicateNodes () {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  list.appendNode('foo')
  list.removeDuplicateNodes()
  expect(list.toArray()).toEqual(['foo', 'bar'])
})

test('LinkedList constructNewList', function removeDuplicateNodes() {
  const list = new LinkedList()
  list.appendNode('foo')
  list.appendNode('bar')
  const names = list.toArray()
  names.push('biz')
  list.constructNewList(names)
  expect(list.toArray()).toEqual(['foo', 'bar', 'biz'])
})
