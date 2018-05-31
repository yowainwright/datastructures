/**
 * @ingore
 * LINKED LIST ⛓
 * ----
 * The Linked List Node is a Linear Structure of Nodes. Each node is a seperate object
 * Credits: This project directly inherits from eyas-ranjous/datastructures-js 🙏
 * ----
 * represents a list of nodes containing information (values)
 */
import { Node } from './Node';
class LinkedList {
    constructor(nodeCount, headNode = null) {
        this.nodeCount = nodeCount;
        this.headNode = headNode;
    }
    /**
     * Add methods
     */
    /**
     * @param value value
     * adds a new node to the beginning of the linkedList
     */
    addFirstNode(value) {
        this.headNode = this.headNode
            ? new Node(this.headNode.getNodeValue())
            : new Node(value);
        this.nodeCount = this.nodeCount + 1;
    }
    /**
     * @param value of node
     * @param Node
     * addLast adds a Linked List Node last
     */
    addLastNode(value, lastNode = this.headNode) {
        if (lastNode === null) {
            this.headNode = new Node(value);
            this.nodeCount = this.nodeCount + 1;
        }
        else if (lastNode.getNextNode() === null) {
            lastNode.setNextNode(new Node(value));
            this.nodeCount = this.nodeCount + 1;
        }
        else
            this.addLastNode(value, lastNode.getNextNode());
    }
    /**
     * @param value => value of current node
     * @param newValue => value of new node
     * @param current => the current node
     * addLast adds a Linked List Node last
     */
    addAfterNode(nodeValueMatch, newValue, current = this.headNode) {
        if (current === null) {
            throw new Error(`LinkedList:node ${nodeValueMatch} not found`);
        }
        else if (current.getNodeValue() === nodeValueMatch) {
            current.setNextNode(new Node(newValue, current.getNextNode()));
            this.nodeCount = this.nodeCount + 1;
        }
        else {
            this.addAfterNode(nodeValueMatch, newValue, current.getNextNode());
        }
    }
    /**
     * @param value => existing node value
     * @param newValue => value of new node
     * @param previous => previous node
     * @param current => the current node
     * addLast adds a Linked List Node last
     */
    addBeforeNode(value, newValue, previous = null, current = this.headNode) {
        if (current === null)
            throw new Error(`node ${value} not found`);
        this.addBeforeNode(value, newValue, previous, current);
    }
    /**
     * @param value
     * @param  previous node
     * @param current node
     * removes a node by its value from the linkedlist
     */
    removeNode(value, previous, current = this.headNode) {
        if (current && previous === null && current.getNodeValue()) {
            this.removeFirstNode();
        }
        else if (current && previous && current.getNodeValue()) {
            previous.setNextNode(current.getNextNode());
            this.nodeCount = this.nodeCount - 1;
        }
        else if (current) {
            this.removeNode(value, current, current.getNextNode());
        }
    }
    /**
     * removes the first node
     */
    removeFirstNode() {
        if (this.headNode === null)
            return;
        this.headNode = this.headNode.getNextNode() === null ?
            null :
            this.headNode.getNextNode();
        this.nodeCount = this.nodeCount - 1;
    }
    /**
     * @param  previous node
     * @param current node
     */
    removeLastNode(previous = null, current = this.headNode) {
        if (current && current.getNextNode() && previous === null) {
            this.headNode = null;
            this.nodeCount = this.nodeCount - 1;
        }
        else if (current && current.getNextNode() && previous) {
            previous.setNextNode(null);
            this.nodeCount = this.nodeCount - 1;
        }
        else if (current) {
            this.removeLastNode(current, current.getNextNode());
        }
    }
    /**
     * @param a callback
     * @param the current first node
     */
    traverseLinkedList(cb, current = this.headNode) {
        if (current === null)
            return;
        cb(current.getNodeValue());
        this.traverseLinkedList(cb, current.getNextNode());
    }
    /**
     * @returns a linked list node
     */
    findNode(value, current = this.headNode) {
        if (current === null)
            return null;
        else if (current.getNodeValue() === value)
            return current;
        else
            return this.findNode(value, current.getNextNode());
    }
    /**
     * Convenience methods
     */
    /**
     * @returns the headNode
     */
    getHeadNode() {
        return this.headNode;
    }
    /**
     * @returns the node code
     */
    getNodeCount() {
        return this.nodeCount;
    }
    /**
     * @returns the Linked List Length
     */
    length() {
        return this.nodeCount;
    }
}
export { LinkedList };
//# sourceMappingURL=index.js.map