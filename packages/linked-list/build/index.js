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
     * @returns {Node} Node
     */
    LinkedList.prototype.appendNode = function (value) {
        if (!this.headNode) {
            this.headNode = new Node_1.Node(value);
            this.tailNode = this.headNode;
        }
        else {
            var newNode = new Node_1.Node(value);
            var tailNode = this.tailNode.nextNode;
            this.tailNode.nextNode = newNode;
            this.tailNode = this.tailNode.nextNode;
        }
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
            if (currentNode && currentNode.value === value) {
                previousNode.nextNode = currentNode.nextNode;
                if (currentNode.value === this.tailNode.value) {
                    this.tailNode = previousNode;
                }
            }
        }
    };
    /**
     * traverseList
     * @param {function} callback
     */
    LinkedList.prototype.traverseList = function (callback) {
        if (!callback || typeof callback !== 'function') {
            return error('traverse requires a callback');
        }
        var currentNode = this.headNode;
        while (currentNode !== null) {
            callback(currentNode);
            currentNode = currentNode.nextNode;
        }
    };
    LinkedList.prototype.appendNodeAt = function (nodePosition, value) {
        if (nodePosition >= this.length()) {
            return error('appendNodeAt requires an in-range position');
        }
        var nodeArray = this.toArray();
        nodeArray.splice(nodePosition, 0, value);
        return this.constructNewList(nodeArray);
    };
    /**
     * reverseList
     */
    LinkedList.prototype.reverseList = function () {
        var reversedListArray = this.toArray().reverse();
        return this.constructNewList(reversedListArray);
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
    LinkedList.prototype.getIndexOfNode = function (value) {
        var list = this.toArray();
        return list.indexOf(value);
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
        this.headNode = null;
    };
    /**
     * removeDuplicateNodes
     * removes duplicateNodes
     */
    LinkedList.prototype.removeDuplicateNodes = function () {
        var nodeArray = this.toArray();
        var nodes = {};
        var filteredNodeArray = nodeArray
            .filter(function (values) { return nodes.hasOwnProperty(values)
            ? false
            : (nodes[values] = true); });
        return this.constructNewList(filteredNodeArray);
    };
    LinkedList.prototype.constructNewList = function (values) {
        var _this = this;
        this.clear();
        return values.forEach(function (value) { return _this.appendNode(value); });
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
