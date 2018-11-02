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
     * @param {string} name
     * @returns {Node} Node
     */
    LinkedList.prototype.appendNode = function (name) {
        if (!this.headNode) {
            this.headNode = new Node_1.Node(name);
            this.tailNode = this.headNode;
        }
        else {
            var newNode = new Node_1.Node(name);
            var tailNode = this.tailNode.nextNode;
            this.tailNode.nextNode = newNode;
            this.tailNode = this.tailNode.nextNode;
        }
    };
    /**
     * removeNode
     * @param {string} name
     */
    LinkedList.prototype.removeNode = function (name) {
        if (!name)
            return error('removeNode requires a value');
        var currentNode = this.headNode;
        while (currentNode !== null) {
            var previousNode = currentNode;
            currentNode = currentNode.nextNode;
            if (currentNode && currentNode.name === name) {
                previousNode.nextNode = currentNode.nextNode;
                if (currentNode.name === this.tailNode.name) {
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
    LinkedList.prototype.appendNodeAt = function (nodePosition, name) {
        if (nodePosition >= this.length()) {
            return error('appendNodeAt requires an in-range position');
        }
        var nodeArray = this.toArray();
        nodeArray.splice(nodePosition, 0, name);
        this.constructNewList(nodeArray);
    };
    /**
     * reverseList
     */
    LinkedList.prototype.reverseList = function () {
        var reversedListArray = this.toArray().reverse();
        this.constructNewList(reversedListArray);
    };
    /**
     * findNode
     * @param {value} value
     */
    LinkedList.prototype.findNode = function (name) {
        var currentNode = this.headNode.nextNode;
        while (currentNode.name !== name) {
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
            nodes.push(currentNode.name);
            currentNode = currentNode.nextNode;
        }
        return nodes;
    };
    LinkedList.prototype.getIndexOfNode = function (name) {
        var list = this.toArray();
        return list.indexOf(name);
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
            .filter(function (names) { return nodes.hasOwnProperty(names)
            ? false
            : (nodes[names] = true); });
        return this.constructNewList(filteredNodeArray);
    };
    LinkedList.prototype.constructNewList = function (names) {
        var _this = this;
        this.clear();
        return names.forEach(function (name) { return _this.appendNode(name); });
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
