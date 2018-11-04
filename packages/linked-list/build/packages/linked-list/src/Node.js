"use strict";
exports.__esModule = true;
/**
 * Linked List Node
 */
var Node = /** @class */ (function () {
    /**
     * @param {string} name
     * @param {object} data
     */
    function Node(name, data, nextNode) {
        if (data === void 0) { data = null; }
        if (nextNode === void 0) { nextNode = null; }
        this.name = name;
        this.data = data;
        this.nextNode = nextNode;
    }
    /**
     * @returns {string} value
     */
    Node.prototype.getNodeValue = function () {
        return this.name;
    };
    /**
     * getNodeData
     * returns the data of a Node
     * @returns {object} data
     */
    Node.prototype.getNodeData = function () {
        return this.data;
    };
    /**
     * getNextNode
     * returns nextNode
     * @returns {Node} this.nextNode
     */
    Node.prototype.getNextNode = function () {
        return this.nextNode;
    };
    /**
     * setNodeValue
     * sets a Node value
     * @param {value} value
     */
    Node.prototype.setNodeValue = function (name) {
        this.name = name;
    };
    /**
     * @param {object} data
     */
    Node.prototype.setNodeData = function (data) {
        this.data = data;
    };
    /**
     * @param {Node} nextNode
     */
    Node.prototype.setNextNode = function (nextNode) {
        this.nextNode = nextNode;
    };
    return Node;
}());
exports.Node = Node;
