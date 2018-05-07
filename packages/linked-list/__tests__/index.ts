import { LinkedListNode, LinkedList } from '../index'

/*
   Jest init
   ---
   - test Jest is working and
   - linkedListNode and LinkedList are imported correctly
*/
test('Jest is working, LinkedListNode is imported', () => {
  console.info('TEST: files are being imported', LinkedListNode, LinkedList)
  expect(typeof LinkedListNode).toBe('function')
  expect(typeof LinkedList).toBe('function')
})

// test LinkedListNode init
test('LinkedListNode init', function testLinkedListNodeInit () {
  const node = new LinkedListNode('foo')
  // expect(node).toBe({ value: 'foo', nextNode: null })
  expect(typeof node).toEqual('object')
  // expect(node.getNodeValue()).toEqual('foo')
})

// test LinkedListNode .getValue()
test('LinkedListNode getValue', function testLinkedListNodeGetValue() {
  const node = new LinkedListNode('foo')
  expect(node.getNodeValue()).toEqual('foo')
})
