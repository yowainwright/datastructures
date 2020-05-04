import { AvlTree } from '..'
import { NodeValue } from '../node'

test('leftRotation basic', () => {
  const tree = new AvlTree()

  //  1
  //   \
  //    2
  //     \
  //      3
  tree.add(1)
  tree.add(2)
  tree.add(3)

  // post balancing:
  //   2
  //  / \
  // 1   3

  expect(tree.count()).toEqual(3)

  // confirm nodes are correct position
  const expectedNodeOrder = [2, 1, 3]
  const resultingOrder = []
  tree.preOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('rightRotation basic', () => {
  const tree = new AvlTree()

  //      3
  //     /
  //    2
  //   /
  //  1
  tree.add(3)
  tree.add(2)
  tree.add(1)

  //   2
  //  / \
  // 1   3

  expect(tree.count()).toEqual(3)

  // confirm nodes are correct position
  const expectedNodeOrder = [2, 1, 3]
  const resultingOrder = []
  tree.preOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('leftRightRotation basic', () => {
  const tree = new AvlTree()

  //  1
  //   \
  //    3
  //   /
  //  2
  tree.add(1)
  tree.add(3)
  tree.add(2)

  //   2
  //  / \
  // 1   3

  expect(tree.count()).toEqual(3)

  // confirm nodes are correct position
  const expectedNodeOrder = [2, 1, 3]
  const resultingOrder = []
  tree.preOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('rightLeftRotation basic', () => {
  const tree = new AvlTree()

  //   3
  //  /
  // 1
  //  \
  //   2
  tree.add(3)
  tree.add(1)
  tree.add(2)

  //   2
  //  / \
  // 1   3

  expect(tree.count()).toEqual(3)

  // confirm nodes are correct position
  const expectedNodeOrder = [2, 1, 3]
  const resultingOrder = []
  tree.preOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('rotation complexish', () => {
  const tree = new AvlTree()
  //      3
  //     /
  //    2
  //   /
  //  1
  tree.add(3)
  tree.add(2)
  tree.add(1)

  //   2
  //  / \
  // 1   3

  // confirm nodes are correct position
  let expectedNodeOrder = [2, 1, 3]
  let resultingOrder = []
  tree.preOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))

  //   2
  //  / \
  // 1   3
  //      \
  //       4

  tree.add(4)

  // confirm nodes are correct position
  expectedNodeOrder = [2, 1, 3, 4]
  resultingOrder = []
  tree.preOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))

  //   2
  //  / \
  // 1   3
  //      \
  //       4
  //        \
  //         5

  tree.add(5)

  //   2
  //  / \
  // 1   4
  //    /  \
  //   3    5

  // confirm nodes are correct position
  expectedNodeOrder = [2, 1, 4, 3, 5]
  resultingOrder = []
  tree.preOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})

test('balancing upon node removal', () => {
  const tree = new AvlTree()
  //      3
  //     / \
  //    2   4
  //   /
  //  1
  tree.add(3)
  tree.add(4)
  tree.add(2)
  tree.add(1)

  // confirm nodes are correct position
  let expectedNodeOrder = [3, 2, 1, 4]
  let resultingOrder = []
  tree.preOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))

  // this will make the tree imbalanced, which will case a right rotation
  tree.remove(4)

  //   2
  //  / \
  // 1   3

  expect(tree.count()).toEqual(3)

  // confirm nodes are correct position
  expectedNodeOrder = [2, 1, 3]
  resultingOrder = []
  tree.preOrderTraversalRecursive((n: NodeValue) => resultingOrder.push(n))
  expectedNodeOrder.map((n: NodeValue, i: number) => expect(resultingOrder[i]).toEqual(n))
})
