import { LinkedListNode, LinkedList } from '../index'

// standard Jest is working test
test('Jest is working, LinkedListNode is imported', () => {
  console.info('TEST: files are being imported', LinkedListNode, LinkedList)
  // expect(1).toBe(1)
  expect(typeof LinkedListNode).toBe('function')
  expect(typeof LinkedList).toBe('function')
}


