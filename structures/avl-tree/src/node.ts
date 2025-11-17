import { AvlTree } from './tree'

export type NodeValue = number
export type NodeObject = AvlTreeNode | null
enum ETreeState {
  leftHeavy = 'leftHeavy',
  rightHeavy = 'rightHeavy',
  balanced = 'balanced',
}

/**
 * AVL Tree Node
 */
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

  /**
   * balance
   * Determins which balance method to use, and calls that method
   */
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

  /**
   * leftRotation
   * performs leftRotation on 'this' AvlTreeNode
   */
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

  /**
   * rightRotation
   * performs rightRotation on 'this' AvlTreeNode
   */
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

  /**
   * replaceRoot
   * helper method that replaces 'this' AvlTreeNode's position with the param AvlTreeNode
   * @param {AvlTreeNode} newRoot
   */
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

  /**
   * leftRightRotation
   * performs leftRightRotation on 'this' AvlTreeNode
   */
  leftRightRotation(): void {
    // right rotate tree on left child
    this.right.rightRotation()
    // left rotate tree on 'this' node
    this.leftRotation()
  }

  /**
   * rightLeftRotation
   * performs rightLeftRotation on 'this' AvlTreeNode
   */
  rightLeftRotation(): void {
    // left rotate tree on left child
    this.left.leftRotation()
    // right rotate tree on 'this' node
    this.rightRotation()
  }

  // Support properties and methods

  /**
   * getMaxChildHeight
   * returns the height of the left or right child node, whichever is greater
   * @param {AvlTreeNode} node
   * @returns {number} maxChildHeight
   */
  getMaxChildHeight(node: AvlTreeNode): number {
    if (!node) {
      return 0
    }
    return 1 + Math.max(this.getMaxChildHeight(node.left), this.getMaxChildHeight(node.right))
  }

  /**
   * getLeftHeight
   * returns left height of Node (how deep the children go to the left)
   * @returns {number} leftHeight
   */
  getLeftHeight(): number {
    return this.getMaxChildHeight(this.left)
  }

  /**
   * getRightHeight
   * returns right height of Node (how deep the children go to the right)
   * @returns {number} rightHeight
   */
  getRightHeight(): number {
    return this.getMaxChildHeight(this.right)
  }

  /**
   * getTreeState
   * returns string to denote whether Node is rightHeavy, leftHeavy, or balanced
   * @returns {ETreeState} treeState
   */
  getTreeState(): ETreeState {
    const balanceFactor = this.getBalanceFactor()
    if (balanceFactor > 1) {
      return ETreeState.rightHeavy
    } else if (balanceFactor < -1) {
      return ETreeState.leftHeavy
    }
    return ETreeState.balanced
  }

  /**
   * getBalanceFactor
   * returns difference between right child and left child nodes' heights
   * @returns {number} balanceFactor
   */
  getBalanceFactor(): number {
    return this.getRightHeight() - this.getLeftHeight()
  }
}
