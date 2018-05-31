/**
 * Linked List Node
 * ----
 * represents a node containing information called a value
 * it may also provide information about the next node (sibling node)
 */
class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
    /**
     * @returns the linked list node value
     */
    getNodeValue() {
        return this.value;
    }
    /**
     * @returns the next list node
     */
    getNextNode() {
        return this.nextNode;
    }
    /**
     * sets the linked list node value
     */
    setNodeValue(value) {
        this.value = value;
    }
    /**
     * sets the linked list node value
     */
    setNextNode(nextNode) {
        this.nextNode = nextNode;
    }
}
export { Node };
//# sourceMappingURL=Node.js.map