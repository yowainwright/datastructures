import { AvlTree } from './tree'

export type NodeValue = number
export type NodeObject = AvlTreeNode | null
enum ETreeState {
  leftHeavy = 'leftHeavy',
  rightHeavy = 'rightHeavy',
  balanced = 'balanced',
}

export class AvlTreeNode {
  value: NodeValue
  left: NodeObject
  right: NodeObject
  parent: NodeObject
  private _tree: AvlTree | undefined

  constructor(value: NodeValue, parent?: AvlTreeNode, tree?: AvlTree) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = parent
    this._tree = tree
  }

  // Balancing Methods
  balance(): void {
    const treeState = this.getTreeState()

    if (treeState === ETreeState.rightHeavy) {
      if (this.right && this.right.getBalanceFactor() < 0) {
        this.leftRightRotation()
      } else {
        this.leftRotation()
      }
    } else if (treeState === ETreeState.leftHeavy) {
      if (this.left && this.left.getBalanceFactor() > 0) {
        this.rightLeftRotation()
      } else {
        this.rightRotation()
      }
    }
  }

  leftRotation(): void {
    // when performing a right rotation on node a:
    //     a
    //      \
    //       b
    //        \
    //         c
    //
    // becomes
    //       b
    //      / \
    //     a   c

    // Step 1: Replace 'this' node with the new root node
    const newRoot = this.right
    this.replaceRoot(newRoot)

    // Step 2: New root's left child becomes old root's right child
    this.right = newRoot.left

    // Step 3: Old root becomes newRoot's left child
    newRoot.left = this
    this.parent = newRoot
  }

  rightRotation(): void {
    //     c (this)
    //    /
    //   b
    //  /
    // a
    //
    // becomes
    //       b
    //      / \
    //     a   c

    // Step 1: Replace 'this' node with the new root node
    const newRoot = this.left
    this.replaceRoot(newRoot)

    // Step 2: newRoot's right child of becomes old root's left child
    this.left = newRoot.right

    // Step 3: Old root becomes newRoot's right child
    newRoot.right = this
    this.parent = newRoot
  }

  replaceRoot(newRoot): void {
    if (!this.parent) {
      // 'this' node is the current head of the tree
      this._tree.head = newRoot
    } else {
      // 'this' has a parent; its parent must now point to the 'newRoot' node
      if (this.parent.right === this) {
        this.parent.right = newRoot
      } else if (this.parent.left === this) {
        this.parent.left = newRoot
      }
    }
    newRoot.parent = this.parent
  }

  leftRightRotation(): void {
    // right rotate tree on left child
    this.right.rightRotation()
    // left rotate tree on 'this' node
    this.leftRotation()
  }

  rightLeftRotation(): void {
    // left rotate tree on left child
    this.left.leftRotation()
    // right rotate tree on 'this' node
    this.rightRotation()
  }

  // Support properties and methods
  getMaxChildHeight(node: AvlTreeNode): number {
    if (!node) {
      return 0
    }
    return 1 + Math.max(this.getMaxChildHeight(node.left), this.getMaxChildHeight(node.right))
  }

  getLeftHeight(): number {
    return this.getMaxChildHeight(this.left)
  }

  getRightHeight(): number {
    return this.getMaxChildHeight(this.right)
  }

  getTreeState(): ETreeState {
    const balanceFactor = this.getBalanceFactor()
    if (balanceFactor > 1) {
      return ETreeState.rightHeavy
    } else if (balanceFactor < -1) {
      return ETreeState.leftHeavy
    }
    return ETreeState.balanced
  }

  // difference between right child and left child nodes' heights
  getBalanceFactor(): number {
    return this.getRightHeight() - this.getLeftHeight()
  }
}
