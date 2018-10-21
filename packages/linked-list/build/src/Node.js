"use strict";
exports.__esModule = true;
/**
 * Linked List Node
 */
var Node = /** @class */ (function () {
    function Node(value, nextNode) {
        if (nextNode === void 0) { nextNode = null; }
        this.value = value;
        this.nextNode = nextNode;
    }
    /**
     * @returns {value} value
     */
    Node.prototype.getNodeValue = function () {
        return this.value;
    };
    /**
     * @returns {Node} this.nextNode
     */
    Node.prototype.getNextNode = function () {
        return this.nextNode;
    };
    /**
     * @param {value} value
     */
    Node.prototype.setNodeValue = function (value) {
        this.value = value;
    };
    /**
     * @returns {Node} this.nextNode
     */
    Node.prototype.setNextNode = function (nextNode) {
        this.nextNode = nextNode;
    };
    return Node;
}());
exports.Node = Node;
