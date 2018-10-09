"use strict";
exports.__esModule = true;
/**
 * @ingore
 * LINKED LIST ⛓
 * ----
 * The Linked List Node is a Linear Structure of Nodes. Each node is a seperate object
 * Credits: This project directly inherits from eyas-ranjous/datastructures-js 🙏
 * ----
 * represents a list of nodes containing information (values)
 */
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList(nodeCount, headNode) {
        if (nodeCount === void 0) { nodeCount = 0; }
        if (headNode === void 0) { headNode = null; }
        this.nodeCount = nodeCount;
        this.headNode = headNode;
    }
    LinkedList.prototype.appendNode = function (value) {
        var current = this.headNode;
        if (!current)
            return new Node_1.Node(value);
        while (current.nextNode)
            current = current.nextNode;
        return new Node_1.Node(value);
    };
    /**
     * Add methods
     */
    /**
     * @param value value
     * adds a new node to the beginning of the linkedList
     */
    LinkedList.prototype.addFirstNode = function (value) {
        this.headNode = this.headNode
            ? new Node_1.Node(this.headNode.getNodeValue())
            : new Node_1.Node(value);
        this.nodeCount = this.nodeCount + 1;
    };
    /**
     * @param value of node
     * @param Node
     * addLast adds a Linked List Node last
     */
    LinkedList.prototype.addLastNode = function (value, lastNode) {
        if (lastNode === void 0) { lastNode = this.headNode; }
        if (lastNode === null) {
            this.headNode = new Node_1.Node(value);
            this.nodeCount = this.nodeCount + 1;
        }
        else if (lastNode.getNextNode() === null) {
            lastNode.setNextNode(new Node_1.Node(value));
            this.nodeCount = this.nodeCount + 1;
        }
        else
            this.addLastNode(value, lastNode.getNextNode());
    };
    /**
     * @param value => value of current node
     * @param newValue => value of new node
     * @param current => the current node
     * addLast adds a Linked List Node last
     */
    LinkedList.prototype.addAfterNode = function (nodeValueMatch, newValue, current) {
        if (current === void 0) { current = this.headNode; }
        if (current === null) {
            throw new Error("LinkedList:node " + nodeValueMatch + " not found");
        }
        else if (current.getNodeValue() === nodeValueMatch) {
            current.setNextNode(new Node_1.Node(newValue, current.getNextNode()));
            this.nodeCount = this.nodeCount + 1;
        }
        else {
            this.addAfterNode(nodeValueMatch, newValue, current.getNextNode());
        }
    };
    /**
     * @param value => existing node value
     * @param newValue => value of new node
     * @param previous => previous node
     * @param current => the current node
     * addLast adds a Linked List Node last
     */
    LinkedList.prototype.addBeforeNode = function (value, newValue, previous, current) {
        if (previous === void 0) { previous = null; }
        if (current === void 0) { current = this.headNode; }
        if (current === null) {
            throw new Error("node " + value + " not found");
        }
        var currentNodeValue = current.getNodeValue();
        var isCurrentNode = currentNodeValue === value;
        if (isCurrentNode && previous === null) {
            this.addFirstNode(newValue);
        }
        else if (isCurrentNode && previous) {
            previous.setNextNode(new Node_1.Node(newValue, current));
            this.nodeCount = this.nodeCount + 1;
        }
        else {
            this.addBeforeNode(value, newValue, current, current.getNextNode());
        }
    };
    /**
     * @param value
     * @param  previous node
     * @param current node
     * removes a node by its value from the linkedlist
     */
    LinkedList.prototype.removeNode = function (value, previous, current) {
        if (current === void 0) { current = this.headNode; }
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
    };
    /**
     * removes the first node
     */
    LinkedList.prototype.removeFirstNode = function () {
        if (this.headNode === null)
            return;
        this.headNode = this.headNode.getNextNode() === null ?
            null :
            this.headNode.getNextNode();
        this.nodeCount = this.nodeCount - 1;
    };
    /**
     * @param  previous node
     * @param current node
     */
    LinkedList.prototype.removeLastNode = function (previous, current) {
        if (previous === void 0) { previous = null; }
        if (current === void 0) { current = this.headNode; }
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
    };
    /**
     * @param a callback
     * @param the current first node
     */
    LinkedList.prototype.traverseLinkedList = function (cb, current) {
        if (current === void 0) { current = this.headNode; }
        if (current === null)
            return;
        cb(current.getNodeValue());
        this.traverseLinkedList(cb, current.getNextNode());
    };
    /**
     * @returns a linked list node
     */
    LinkedList.prototype.findNode = function (value, current) {
        if (current === void 0) { current = this.headNode; }
        if (current === null)
            return null;
        else if (current.getNodeValue() === value)
            return current;
        else
            return this.findNode(value, current.getNextNode());
    };
    /**
     * Convenience methods
     */
    /**
     * @returns the headNode
     */
    LinkedList.prototype.getHeadNode = function () {
        return this.headNode;
    };
    /**
     * @returns the node code
     */
    LinkedList.prototype.getNodeCount = function () {
        return this.nodeCount;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
