"use strict";
/**
 * LINKED LIST ⛓
 * ----
 * The Linked List Node is a Linear Structure of Nodes. Each node is a seperate object
 * represents a list of nodes containing information (values)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var warn = function (msg) {
    return console.warn('%c ⚠️ DataStructures TS: ', 'background: blue, color: white', msg);
};
exports.Node = function (name, data, nextNode) {
    if (data === void 0) { data = null; }
    if (nextNode === void 0) { nextNode = null; }
    return ({
        name: name,
        data: data,
        nextNode: nextNode,
    });
};
var LinkedList = /** @class */ (function () {
    function LinkedList(headNode, debug) {
        if (headNode === void 0) { headNode = null; }
        if (debug === void 0) { debug = false; }
        this.headNode = headNode;
        this.debug = debug;
    }
    /**
     * appendNode
     * @param {string} name
     * @returns {Node} Node
     */
    LinkedList.prototype.appendNode = function (name, data) {
        var newNode = exports.Node(name, data);
        if (!this.headNode) {
            this.headNode = newNode;
            this.tailNode = this.headNode;
        }
        else {
            this.tailNode.nextNode = newNode;
            this.tailNode = this.tailNode.nextNode;
        }
    };
    /**
     * removeNode
     * @param {string} name
     */
    LinkedList.prototype.removeNode = function (name) {
        if (this.debug && !name)
            return warn('removeNode requires a value');
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
        if (this.debug && !callback || typeof callback !== 'function') {
            return warn('traverse requires a callback');
        }
        var currentNode = this.headNode;
        while (currentNode !== null) {
            callback(currentNode);
            currentNode = currentNode.nextNode;
        }
    };
    LinkedList.prototype.appendNodeAt = function (nodePosition, name) {
        if (this.debug && nodePosition >= this.length()) {
            return warn('appendNodeAt requires an in-range position');
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
            nodes.push(currentNode);
            currentNode = currentNode.nextNode;
        }
        return nodes;
    };
    LinkedList.prototype.getIndexOfNode = function (name) {
        var list = this.toArray();
        return list.map(function (o) { return o.name; }).indexOf(name);
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
    /**
     * constructNewList
     * constructs a New List from Node Objects
     */
    LinkedList.prototype.constructNewList = function (nodes) {
        var _this = this;
        this.clear();
        return Array.from(nodes, function (_a) {
            var name = _a.name, data = _a.data;
            return _this.appendNode(name, data);
        });
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
//# sourceMappingURL=index.js.map