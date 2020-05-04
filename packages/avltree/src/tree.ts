import { AvlTreeNode, NodeValue, NodeObject } from './node'

export class AvlTree {
  head: NodeObject
  private _count = 0

  add(value: NodeValue): void {
    this._count++
    let newNode: AvlTreeNode

    // If tree is empty, make the new node the head
    if (!this.head) {
      newNode = new AvlTreeNode(value, null, this)
      this.head = newNode
      return
    }

    // Traverse tree, keeping track of the current node and its parent
    let current = this.head
    let prev: NodeObject = null

    while (current) {
      prev = current
      if (value >= current.value) {
        current = current.right
      } else if (value < current.value) {
        current = current.left
      }
    }

    newNode = new AvlTreeNode(value, prev, this)

    // Have reached bottom of tree. Attach new node
    if (value >= prev.value) {
      prev.right = newNode
    } else {
      prev.left = newNode
    }

    // perform selfbalancing
    this.balanceFromNode(newNode)
  }

  remove(value: NodeValue): NodeValue {
    // Start by finding the node to remove and its parent (if it has a parent)
    let toRemove: AvlTreeNode = null
    let parent: AvlTreeNode = null

    let current = this.head
    while (current) {
      if (current.value > value) {
        parent = current
        current = current.left
      } else if (current.value < value) {
        parent = current
        current = current.right
      } else {
        toRemove = current
        break
      }
    }

    // Node does not exist
    if (!toRemove) {
      return null
    }

    this._count--

    if (!toRemove.right) {
      // case 1: Node has no right child; promote left child

      if (parent) {
        // promote left child of toRemove to become the toRemove's parent's right/left child
        if (toRemove.value < parent.value) {
          // toRemove is left child of parent
          parent.left = toRemove.left
        } else if (toRemove.value >= parent.value) {
          // toRemove is right child of parent
          parent.right = toRemove.left
        }
      } else {
        this.head = toRemove.left
      }
      toRemove.left = null
    } else if (!toRemove.right.left) {
      // case 2: right child of node to remove has no left child

      if (parent) {
        // promote left child of toRemove to become the toRemove's parent's right/left child
        if (toRemove.value < parent.value) {
          // toRemove is left child of parent
          parent.left = toRemove.right
          parent.left.left = toRemove.left
        } else if (toRemove.value >= parent.value) {
          // toRemove is right child of parent
          parent.right = toRemove.right
          parent.right.left = toRemove.left
        }
      } else {
        this.head = toRemove.right
        this.head.left = toRemove.left
      }
      toRemove.left = null
      toRemove.right = null
    } else {
      // case 3: toRemove's right child has a left child

      // find leftmost child of toRemove's right child
      let leftParent = toRemove.right
      let leftMost = toRemove.right.left
      while (leftMost.left) {
        leftParent = leftMost
        leftMost = leftMost.left
      }
      if (parent) {
        // promote that leftmost child to replace toRemove
        if (toRemove.value < parent.value) {
          // toRemove is left child of parent
          parent.left = leftMost
        } else if (toRemove.value >= parent.value) {
          // toRemove is right child of parent
          parent.right = leftMost
        }
      } else {
        this.head = leftMost
      }

      leftParent.left = null
      leftMost.right = toRemove.right
      leftMost.left = toRemove.left
      toRemove.left = null
      toRemove.right = null
    }

    // perform selfbalancing
    this.balanceFromNode(parent)

    return toRemove.value
  }

  // balance the tree on each node all the way up to the head
  balanceFromNode(node: AvlTreeNode): void {
    // balance the tree on each node all the way up to the head
    let nodeToBalance = node
    while (nodeToBalance) {
      nodeToBalance.balance()
      nodeToBalance = nodeToBalance.parent
    }
  }

  search(value: NodeValue): NodeValue {
    let current = this.head

    while (current) {
      if (current.value > value) {
        current = current.left
      } else if (current.value < value) {
        current = current.right
      } else {
        return current.value
      }
    }

    return null
  }

  preOrderTraversalRecursive(action: (n: NodeValue) => void): void {
    this.preOrderTraversalRecursiveHelper(action, this.head)
  }

  preOrderTraversalRecursiveHelper(action: (n: NodeValue) => void, node: AvlTreeNode): void {
    if (node) {
      action(node.value)
      this.preOrderTraversalRecursiveHelper(action, node.left)
      this.preOrderTraversalRecursiveHelper(action, node.right)
    }
  }

  postOrderTraversalRecursive(action: (n: NodeValue) => void): void {
    this.postOrderTraversalRecursiveHelper(action, this.head)
  }

  postOrderTraversalRecursiveHelper(action: (n: NodeValue) => void, node: AvlTreeNode): void {
    if (node) {
      this.postOrderTraversalRecursiveHelper(action, node.left)
      this.postOrderTraversalRecursiveHelper(action, node.right)
      action(node.value)
    }
  }

  inOrderTraversalRecursive(action: (n: NodeValue) => void): void {
    this.inOrderTraversalRecursiveHelper(action, this.head)
  }

  inOrderTraversalRecursiveHelper(action: (n: NodeValue) => void, node: AvlTreeNode): void {
    if (node) {
      this.inOrderTraversalRecursiveHelper(action, node.left)
      action(node.value)
      this.inOrderTraversalRecursiveHelper(action, node.right)
    }
  }

  // nonrecursive; safer for production environments, since callstack limits will not be approached
  inOrderTraversal(action: (n: NodeValue) => void): void {
    if (!this.head) {
      return
    }

    let current = this.head
    const stack = [current]
    let goLeft = true

    // while we have nodes to process...
    while (current) {
      if (goLeft) {
        // find leftmost child of current node (this allows us to process the lowest # first)
        while (current.left) {
          if (current.left) {
            // if current node has a left child, add current node to stack to process later
            stack.push(current)
          }
          // keep traversing left
          current = current.left
        }
      }

      // act on the current node
      action(current.value)

      if (current.right) {
        // if current node has a right child, add to the stack for later processing
        stack.push(current.right)
        // we will then traverse to the left most child of current.right
        goLeft = true
      } else {
        // do not go left on the next node in the stack,
        // since the current node is that node's left child; we'd repeat ourselves
        goLeft = false
      }

      // pop a node off the stack to process next
      current = stack.pop()
    }
  }

  count(): number {
    return this._count
  }

  clear(): void {
    this._count = 0
    this.head = null
  }
}
