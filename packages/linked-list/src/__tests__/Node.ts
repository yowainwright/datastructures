declare function test(msg: string, test: Function)
declare function expect (result: any)

import { Node } from '../Node'

test('Node init', function testNodeInit () {
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

// test Node .getNextNode()
test('Node getNextNode', function testGetNextNode () {
  const node = new Node('foo')
  const nextNode = new Node('bar')
  node.setNextNode(nextNode)
  expect(node.getNextNode().name).toEqual('bar')
})

// test Node .setNodeValue()
test('Node setNodeValue', function testSetNodeValue () {
  const node = new Node('foo')
  node.setNodeValue('bar')
  expect(node.getNodeValue()).toEqual('bar')
})

// test Node .setNodeValue() .getNextNode()
test('Node setNextNode and getNextNode', function testSetGetNextNode () {
  const node = new Node('foo')
  const otherNode = new Node('bar')
  node.setNextNode(otherNode)
  const nextNode = node.getNextNode()
  expect(typeof node.getNextNode()).toBe('object')
  expect(nextNode.getNodeValue()).toEqual('bar')
})
