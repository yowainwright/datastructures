import { Node } from '../Node'

/*
   Node Tests
*/
test('Jest is working, LinkedListNode is imported', () => {
  expect(typeof Node).toBe('function')
})

// test LinkedListNode init
test('LinkedListNode init', function testLinkedListNodeInit () {
  const node = new Node('foo')
  expect(typeof node).toEqual('object')
  expect(node.getNodeValue()).toEqual('foo')
  expect(node.nextNode).toEqual(null)
})

// test Node .getNodeValue()
test('Node getNodeValue', function testNodeGetValue () {
  const node = new Node('foo')
  expect(node.getNodeValue()).toEqual('foo')
})

// test Node .setNodeValue()
test('Node setNodeValue', function testNodeSetValue () {
  const node = new Node('foo')
  node.setNodeValue('bar')
  expect(node.getNodeValue()).toEqual('bar')
})

// test Node .setNodeValue()
test('Node setNextNode', function testNode () {
  const node = new Node('foo')
  const otherNode = new Node('bar')
  node.setNextNode(otherNode)
  const nextNode = node.getNextNode()
  expect(typeof node.getNextNode()).toBe('object')
  expect(nextNode.getNodeValue()).toEqual('bar')
})
