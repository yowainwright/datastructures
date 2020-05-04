# @datastructures/avl-tree 🦄⛓

The AVL Tree is a Binary Search Tree that self balances when the right or left side becomes > 1 deeper than the other
The self-balancing ensures that time complexity of the search method stays close to O(NlogN)
Each node is a seperate object; an instance of AvlTreeNode
AvlTree currently only handles numbers, but could be converted to a Generic to handle strings as well

---

## Install

```sh

npm i @datastructures/avl-tree -D

# or

yarn add @datastructures/avl-tree -D

```

---

## Usage

New AVL Trees can be created by importing the AvlTree class and setting them up similarly to the example below.

```javascript
import { AvlTree } from '@datastructures/avl-tree'

const tree = new AvlTree()
tree.add(2)
tree.add(1)

console.log(tree.count()) // 2
console.log(tree.search(2)) // 2
console.log(tree.search(3)) // null

tree.inOrderTraversal(node => console.log('This node has value:', node.value))
/*
This node has value: 1
This node has value: 2
*/
```

---

## API

Listed below is the AVL Tree API.

#### `Methods`

**`add(value)`:** adds a AvlTreeNode with a `value` `{number}` to the tree. Rebalancing is performed automatically after the new AvlTreeNode is added.

> **ex:** `tree.add(1)`

**`remove(value)`:** removes a AvlTreeNode by `value` from the tree. Rebalancing is performed automatically after the AvlTreeNode is removed.

> **ex:** `tree.remove(1)`

**`search(value)`:** searches for an existing AvlTreeNode by `value`. If one is found, the value is returned. The tree is not modified.

> **ex:** `if (tree.search(value)) { /* do something about it */ }`

**`preOrderTraversalRecursive(fn)`:** envokes a callback function (`fn`) on each node within a tree, using "preOrder traversal" order

> **ex:** `tree.preOrderTraversalRecursive(node => console.log('This node has value:', node.value))`

**`postOrderTraversalRecursive(fn)`:** envokes a callback function (`fn`) on each node within a tree, using "postOrder traversal" order

> **ex:** `tree.postOrderTraversalRecursive(node => console.log('This node has value:', node.value))`

**`inOrderTraversalRecursive(fn)`:** envokes a callback function (`fn`) on each node within a tree, using "inOrder traversal" order

> **ex:** `tree.inOrderTraversalRecursive(node => console.log('This node has value:', node.value))`

**`inOrderTraversal(fn)`:** envokes a callback function (`fn`) on each node within a tree, using "inOrder traversal" order. This method is iterative rather than recursive, so is safer for production scenarios.

> **ex:** `tree.inOrderTraversal(node => console.log('This node has value:', node.value))`

**`count`:** returns number of AvlTreeNodes currently in the tree

> **ex:** `const count = tree.count()`

**`clear`:** removes all AvlTreeNodes from tree and allows them to be garbage collected

> **ex:** `tree.clear()`

---

## Resources

The list below provides links to other helpful tools for understanding the Linked List data structure.

- [AVL Tree](https://en.wikipedia.org/wiki/AVL_tree) via Wikipedia

## Code Examples

---

View other [**Data Structures**](../).
