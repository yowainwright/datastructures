import { AvlTree, AvlTreeNode } from '..'
import { NodeValue } from '../node'

test('Node init', () => {
  const node = new AvlTreeNode(5)
  expect(node.value).toEqual(5)
  expect(node.left).toEqual(null)
  expect(node.right).toEqual(null)
})

test('Tree init', () => {
  const tree = new AvlTree()
  expect(tree.count()).toEqual(0)
})

test('Tree add', () => {
  const tree = new AvlTree()
  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(4)

  expect(tree.count()).toEqual(4)

  // confirm remaining nodes are correct position
  const expectedNodeOrder = [1, 2, 3, 4]
  const resultingOrder = []
  tree.inOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('Tree preOrderTraversalRecursive', () => {
  const tree = new AvlTree()
  //         4
  //       /   \
  //      2      6
  //     / \    / \
  //    1   3  5   7

  tree.add(4)
  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(6)
  tree.add(7)
  tree.add(5)

  // confirm remaining nodes are correct position
  const expectedNodeOrder = [4, 2, 1, 3, 6, 5, 7]
  const resultingOrder = []
  tree.preOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('Tree postOrderTraversalRecursive', () => {
  const tree = new AvlTree()
  //         4
  //       /   \
  //      2      6
  //     / \    / \
  //    1   3  5   7

  tree.add(4)
  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(6)
  tree.add(7)
  tree.add(5)

  // confirm remaining nodes are correct position
  const expectedNodeOrder = [1, 3, 2, 5, 7, 6, 4]
  const resultingOrder = []
  tree.postOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('Tree inOrderTraversalRecursive', () => {
  const tree = new AvlTree()
  //         4
  //       /   \
  //      2      6
  //     / \    / \
  //    1   3  5   7

  tree.add(4)
  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(6)
  tree.add(7)
  tree.add(5)

  // confirm remaining nodes are correct position
  const expectedNodeOrder = [1, 2, 3, 4, 5, 6, 7]
  const resultingOrder = []
  tree.inOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('Tree inOrderTraversal', () => {
  const tree = new AvlTree()
  //         4
  //       /   \
  //      2      6
  //     / \    / \
  //    1   3  5   7

  tree.add(4)
  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(6)
  tree.add(7)
  tree.add(5)

  // confirm remaining nodes are correct position
  const expectedNodeOrder = [1, 2, 3, 4, 5, 6, 7]
  const resultingOrder = []
  tree.inOrderTraversal((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('Tree search', () => {
  const tree = new AvlTree()
  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(4)

  expect(tree.search(4)).toEqual(4)

  const notFound = tree.search(5)
  expect(notFound).toEqual(null)
  // search does not mutate tree; count has not changed
  expect(tree.count()).toEqual(4)
})

test('Tree remove; node not found', () => {
  const tree = new AvlTree()
  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(4)

  expect(tree.count()).toEqual(4)

  expect(tree.remove(5)).toEqual(null)
  // count has not changed
  expect(tree.count()).toEqual(4)
})

test('Tree remove; node has no right child', () => {
  const tree = new AvlTree()
  //         4
  //       /   \
  //      2     8
  //     / \    /
  //    1   3  6
  //          / \
  //         5   7

  tree.add(4)
  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(8)
  tree.add(6)
  tree.add(7)
  tree.add(5)

  expect(tree.remove(8)).toEqual(8)

  //         4
  //       /   \
  //      2      6
  //     / \    / \
  //    1   3  5   7

  // one node removed
  expect(tree.count()).toEqual(7)

  // confirm remaining nodes are correct position
  const expectedNodeOrder = [1, 2, 3, 4, 5, 6, 7]
  const resultingOrder = []
  tree.inOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test("Tree remove; node's right child has no left child", () => {
  const tree = new AvlTree()
  //         4
  //       /   \
  //      2     6
  //     / \   / \
  //    1  3  5   7
  //               \
  //                8

  tree.add(4)
  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(6)
  tree.add(5)
  tree.add(7)
  tree.add(8)

  expect(tree.count()).toEqual(8)

  expect(tree.remove(6)).toEqual(6)

  //         4
  //       /   \
  //      2     7
  //     / \   / \
  //    1  3  5   8

  // one node removed
  expect(tree.count()).toEqual(7)

  // confirm remaining nodes are correct position
  const expectedNodeOrder = [1, 2, 3, 4, 5, 7, 8]
  const resultingOrder = []
  tree.inOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test("Tree remove; node's right child has a left child", () => {
  const tree = new AvlTree()
  //         4
  //       /   \
  //      2     6
  //     / \   / \
  //    1  3  5   8
  //             /
  //            7

  tree.add(4)
  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(6)
  tree.add(5)
  tree.add(8)
  tree.add(7)

  expect(tree.count()).toEqual(8)

  expect(tree.remove(6)).toEqual(6)

  //         4
  //       /   \
  //      2     7
  //     / \   / \
  //    1  3  5   8

  // one node removed
  expect(tree.count()).toEqual(7)

  // confirm remaining nodes are correct position
  const expectedNodeOrder = [1, 2, 3, 4, 5, 7, 8]
  const resultingOrder = []
  tree.inOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('Tree remove; node is head', () => {
  const tree = new AvlTree()
  //         2
  //       /   \
  //      1     3
  //             \
  //              4

  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(4)

  expect(tree.count()).toEqual(4)

  expect(tree.remove(2)).toEqual(2)
  //         3
  //       /   \
  //      1     4

  // one node removed
  expect(tree.count()).toEqual(3)

  // confirm remaining nodes are correct position
  const expectedNodeOrder = [1, 3, 4]
  const resultingOrder = []
  tree.inOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('Tree remove; node is a leaf (terminal)', () => {
  const tree = new AvlTree()
  //         2
  //       /   \
  //      1     3
  //             \
  //              4

  tree.add(2)
  tree.add(1)
  tree.add(3)
  tree.add(4)

  expect(tree.count()).toEqual(4)

  expect(tree.remove(4)).toEqual(4)
  //         2
  //       /   \
  //      1     3

  // one node removed
  expect(tree.count()).toEqual(3)

  // confirm remaining nodes are correct position
  const expectedNodeOrder = [1, 2, 3]
  const resultingOrder = []
  tree.inOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})
