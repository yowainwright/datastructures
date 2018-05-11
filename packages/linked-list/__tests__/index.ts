import { LinkedListNode, LinkedList } from '../index'

/*
   linkedListNode
   ---
*/
test('Jest is working, LinkedListNode is imported', () => {
  expect(typeof LinkedListNode).toBe('function')
  expect(typeof LinkedList).toBe('function')
})

// test LinkedListNode init
test('LinkedListNode init', function testLinkedListNodeInit () {
  const node = new LinkedListNode('foo')
  expect(typeof node).toEqual('object')
  expect(node.value).toEqual('foo')
  expect(node.nextNode).toEqual(null)
})

// test LinkedListNode .getNodeValue()
test('LinkedListNode getValue', function testLinkedListNodeGetValue () {
  const node = new LinkedListNode('foo')
  expect(node.getNodeValue()).toEqual('foo')
})

// test LinkedListNode .setNodeValue()
test('LinkedListNode setNodeValue', function testLinkedListNodeSetValue () {
  const node = new LinkedListNode('foo')
  node.setNodeValue('bar')
  expect(node.value).toEqual('bar')
})
