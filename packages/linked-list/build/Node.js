"use strict";
exports.__esModule = true;
/**
 * Linked List Node
 * ----
 * represents a node containing information called a value
 * it may also provide information about the next node (sibling node)
 */
var Node = /** @class */ (function () {
    function Node(value, nextNode) {
        if (nextNode === void 0) { nextNode = null; }
        this.value = value;
        this.nextNode = nextNode;
    }
    /**
     * @returns the linked list node value
     */
    Node.prototype.getNodeValue = function () {
        return this.value;
    };
    /**
     * @returns the next list node
     */
    Node.prototype.getNextNode = function () {
        return this.nextNode;
    };
    /**
     * sets the linked list node value
     */
    Node.prototype.setNodeValue = function (value) {
        this.value = value;
    };
    /**
     * sets the linked list node value
     */
    Node.prototype.setNextNode = function (nextNode) {
        this.nextNode = nextNode;
    };
    return Node;
}());
exports.Node = Node;
