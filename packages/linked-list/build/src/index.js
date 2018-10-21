"use strict";
exports.__esModule = true;
var Debug = require("debug");
var Node_1 = require("./Node");
var error = Debug('Error:LinkedList:');
/**
 * LINKED LIST ⛓
 * ----
 * The Linked List Node is a Linear Structure of Nodes. Each node is a seperate object
 * represents a list of nodes containing information (values)
 */
var LinkedList = /** @class */ (function () {
    function LinkedList(headNode) {
        if (headNode === void 0) { headNode = null; }
        this.headNode = headNode;
    }
    /**
     * appendNode
     * @param {value} value
     */
    LinkedList.prototype.appendNode = function (value) {
        if (!this.headNode)
            return this.headNode = new Node_1.Node(value);
        var currentNode = this.headNode;
        while (currentNode.nextNode)
            currentNode = currentNode.nextNode;
        return currentNode.nextNode = new Node_1.Node(value);
    };
    /**
     * removeNode
     * @param {value} value
     */
    LinkedList.prototype.removeNode = function (value) {
        if (!value)
            return error('removeNode requires a value');
        var currentNode = this.headNode;
        while (currentNode !== null) {
            var previousNode = currentNode;
            currentNode = currentNode.nextNode;
            if (currentNode.value === value) {
                previousNode.nextNode = currentNode.nextNode;
            }
        }
    };
    /**
     * traverseList
     * TODO: better name
     * @param {function} callback
     */
    LinkedList.prototype.traverseList = function (callback) {
        if (!callback || typeof callback !== 'function') {
            return error('traverse requires a callback');
        }
        var current = this.headNode;
        while (current !== null) {
            callback(current);
            current = current.nextNode;
        }
    };
    /**
     * appendNodeAt
     * @param {number} nodePosition
     * @param {value} value
     */
    LinkedList.prototype.appendNodeAt = function (nodePosition, value) {
        if (nodePosition >= this.length()) {
            return error('appendNodeAt requires an in-range position');
        }
        var counter = 0;
        var current = this.headNode;
        while (counter !== nodePosition) {
            current = current.nextNode;
            counter += 1;
        }
        return current.nextNode = new Node_1.Node(value);
    };
    /**
     * reverseList
     */
    LinkedList.prototype.reverseList = function () {
        var current = this.headNode.nextNode;
        var previousNode;
        var nextNode;
        while (current !== null) {
            nextNode = current.nextNode;
            current.nextNode = previousNode;
            previousNode = current;
            current = nextNode;
        }
        this.headNode.nextNode = previousNode;
    };
    /**
     * findNode
     * @param {value} value
     */
    LinkedList.prototype.findNode = function (value) {
        var currentNode = this.headNode.nextNode;
        while (currentNode.value !== value) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    };
    /**
     * getNodePosition
     * gets the position (number) of a node with a certian value
     * @param {value} value
     */
    LinkedList.prototype.getNodePosition = function (value) { };
    /**
     * getHeadNode
     * @returns {headNode} Node
     */
    LinkedList.prototype.getHeadNode = function () {
        return this.headNode;
    };
    /**
     * toArray
     * presents a linkedList as an array
     */
    LinkedList.prototype.toArray = function () {
        var currentNode = this.headNode;
        var nodes = [];
        while (currentNode !== null) {
            nodes.push(currentNode.value);
            currentNode = currentNode.nextNode;
        }
        return nodes;
    };
    /**
     * length
     * returns the length of a linkedList
     */
    LinkedList.prototype.length = function () {
        return this.toArray().length;
    };
    /**
     * clear
     * clears a linkedList
     */
    LinkedList.prototype.clear = function () {
        var nextNode = this.headNode.nextNode;
        while (nextNode !== null) {
            this.removeNode(nextNode.value);
        }
        this.removeNode(this.headNode.value);
    };
    /**
     * removeDuplicateNodes
     * removes duplicateNodes
     */
    LinkedList.prototype.removeDuplicateNodes = function () {
        var nodes = this.toArray();
        var nodesObjectValues = {};
        return nodes
            .filter(function (nodeValues) { return nodesObjectValues.hasOwnProperty(nodeValues)
            ? false
            : (nodesObjectValues[nodeValues] = true); });
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
