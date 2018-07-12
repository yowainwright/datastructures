declare function test(msg: string, test: Function)
declare function expect (result: any)

import { LinkedList } from '../index.ts'
import { Node } from '../Node'

/*
   linkedListNode Tests
*/
test('Jest is working, LinkedList is imported', () => {
  expect(typeof LinkedList).toBe('function')
})

// test LinkedListNode .setNodeValue()
test('LinkedList setNextNode', function testLinkedList () {
  const node = new Node('foo')
  const otherNode = new Node('bar')
  const list = new LinkedList(1, node)
  expect(list.headNode.value).toEqual('foo')
})

// test LinkedListNode .addFirstNode()
test('LinkedList addFirstNode', function addFirstNode () {
  const list = new LinkedList()
  list.addFirstNode('foo')
  expect(list.nodeCount).toEqual(1)
  expect(list.headNode.value).toEqual('foo')
})

// test LinkedListNode .addFirstNode()
test('LinkedList addLastNode', function addLastNode () {
  const list = new LinkedList()
  list.addFirstNode('foo')
  expect(list.nodeCount).toEqual(1)
  expect(list.headNode.value).toEqual('foo')
  list.addLastNode('bar')
  expect(list.nodeCount).toEqual(2)
  const lastNode = list.findNode('bar')
  expect(lastNode.value).toEqual('bar')
})

// test LinkedListNode .addAfterNode()
test('LinkedList addAfterNode', function addAfterNode () {
  const list = new LinkedList()
  list.addFirstNode('foo')
  expect(list.nodeCount).toEqual(1)
  expect(list.headNode.value).toEqual('foo')
  list.addLastNode('bar')
  list.addAfterNode('foo', 'biz')
  expect(list.nodeCount).toEqual(3)
})

// test LinkedListNode .addBeforeNode()
test('LinkedList addBeforeNode', function addBeforeNode () {
  const list = new LinkedList()
  list.addFirstNode('foo')
  expect(list.nodeCount).toEqual(1)
  list.addBeforeNode('foo', 'bar')
  expect(list.nodeCount).toEqual(2)
})
