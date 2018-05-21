import { LinkedListNode, LinkedList } from '../index'

/*
   linkedListNode Tests
*/
test('Jest is working, LinkedListNode is imported', () => {
  expect(typeof LinkedListNode).toBe('function')
  expect(typeof LinkedList).toBe('function')
})

// test LinkedListNode init
test('LinkedListNode init', function testLinkedListNodeInit () {
  const node = new LinkedListNode('foo')
  expect(typeof node).toEqual('object')
  expect(node.getNodeValue()).toEqual('foo')
  expect(node.nextNode).toEqual(null)
})

// test LinkedListNode .getNodeValue()
test('LinkedListNode getNodeValue', function testLinkedListNodeGetValue () {
  const node = new LinkedListNode('foo')
  expect(node.getNodeValue()).toEqual('foo')
})

// test LinkedListNode .setNodeValue()
test('LinkedListNode setNodeValue', function testLinkedListNodeSetValue () {
  const node = new LinkedListNode('foo')
  node.setNodeValue('bar')
  expect(node.getNodeValue()).toEqual('bar')
})

// test LinkedListNode .setNodeValue()
test('LinkedListNode setNextNode', function testLinkedListNextNode () {
  const node = new LinkedListNode('foo')
  const otherNode = new LinkedListNode('bar')
  node.setNextNode(otherNode)
  const nextNode = node.getNextNode()
  expect(typeof node.getNextNode()).toBe('object')
  expect(nextNode.getNodeValue()).toEqual('bar')
})

// test LinkedListNode .setNodeValue()
test('LinkedList setNextNode', function testLinkedList () {
  const node = new LinkedListNode('foo')
  const otherNode = new LinkedListNode('bar')
  const list = new LinkedList(1, node)
  expect(list.headNode.value).toBe('foo')

})
