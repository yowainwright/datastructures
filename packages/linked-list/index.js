"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  LINKED LIST ⛓
  ----
  The Linked List Node is a Linear Structure of Nodes. Each node is a seperate object.

  Credits: This project directly inherits from eyas-ranjous/datastructures-js 🙏
  ----
  <T> Generics = is used instead of typescript's 'any'
  - https://www.typescriptlang.org/docs/handbook/generics.html
  - <T> (a Generic) insures an 'any' type is of the same type!
*/
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, nextNode) {
        if (nextNode === void 0) { nextNode = null; }
        this.value = value;
        this.nextNode = nextNode;
    }
    // gets value of the current node
    LinkedListNode.prototype.getNodeValue = function () {
        return this.value;
    };
    // :void means that there will be no return value
    // sets the value of the current LinkedListNode
    LinkedListNode.prototype.setValue = function (value) {
        this.value = value;
    };
    // gets the next Linkded
    LinkedListNode.prototype.getNextNode = function () {
        return this.nextNode;
    };
    // sets the next node
    LinkedListNode.prototype.setNextNode = function (nextNode) {
        this.nextNode = nextNode;
    };
    return LinkedListNode;
}());
/*
  Linked List ⛓
  ----

  The Linked List Class inheritis the Linked List Node Class as a child
*/
var LinkedList = /** @class */ (function () {
    function LinkedList(nodeCount, headNode) {
        if (headNode === void 0) { headNode = null; }
        this.nodeCount = nodeCount;
        this.headNode = headNode;
    }
    // get the initial node
    LinkedList.prototype.getHeadNode = function () {
        return this.headNode;
    };
    // get the number of nodes in a Linked List
    LinkedList.prototype.getNodeCount = function () {
        return this.nodeCount;
    };
    return LinkedList;
}());
exports.default = {
    LinkedListNode: LinkedListNode,
    LinkedList: LinkedList
};
//# sourceMappingURL=index.js.map