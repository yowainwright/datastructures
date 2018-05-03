"use strict";
/*
  This project directly inherits from eyas-ranjous/datastructures-js 🙏
*/
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList(value, next) {
        this.value = value;
        this.next = next;
        this.value = value;
        this.setNext(next);
    }
    LinkedList.prototype.getValue = function () {
        return this.value;
    };
    LinkedList.prototype.setValue = function (value) {
        this.value = value;
    };
    LinkedList.prototype.getNext = function () {
        return this.next;
    };
    LinkedList.prototype.setNext = function (node) {
        this.setNode(node, 'next');
    };
    LinkedList.prototype.setNode = function (node, type) {
        this[type] = node instanceof LinkedList ? node : null;
    };
    return LinkedList;
}());
exports.default = LinkedList;
//# sourceMappingURL=linked-list.js.map