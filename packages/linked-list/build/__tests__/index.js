"use strict";
exports.__esModule = true;
var __1 = require("..");
var Node_1 = require("../Node");
/*
   linkedListNode Tests
*/
test('Jest is working, LinkedList is imported', function () {
    expect(typeof __1.LinkedList).toBe('function');
});
// test LinkedListNode .setNodeValue()
test('LinkedList setNextNode', function testLinkedList() {
    var node = new Node_1.Node('foo');
    var otherNode = new Node_1.Node('bar');
    var list = new __1.LinkedList(1, node);
    expect(list.headNode.value).toEqual('foo');
});
// test LinkedListNode .addFirstNode()
test('LinkedList addFirstNode', function addFirstNode() {
    var list = new __1.LinkedList();
    list.addFirstNode('foo');
    expect(list.nodeCount).toEqual(1);
    expect(list.headNode.value).toEqual('foo');
});
// test LinkedListNode .addFirstNode()
test('LinkedList addLastNode', function addLastNode() {
    var list = new __1.LinkedList();
    list.addFirstNode('foo');
    expect(list.nodeCount).toEqual(1);
    expect(list.headNode.value).toEqual('foo');
    list.addLastNode('bar');
    expect(list.nodeCount).toEqual(2);
    var lastNode = list.findNode('bar');
    expect(lastNode.value).toEqual('bar');
});
// test LinkedListNode .addAfterNode()
test('LinkedList addAfterNode', function addAfterNode() {
    var list = new __1.LinkedList();
    list.addFirstNode('foo');
    expect(list.nodeCount).toEqual(1);
    expect(list.headNode.value).toEqual('foo');
    list.addLastNode('bar');
    list.addAfterNode('foo', 'biz');
    expect(list.nodeCount).toEqual(3);
});
// test LinkedListNode .addBeforeNode()
test('LinkedList addBeforeNode', function addBeforeNode() {
    var list = new __1.LinkedList();
    list.addFirstNode('foo');
    expect(list.nodeCount).toEqual(1);
    list.addBeforeNode('foo', 'bar');
    expect(list.nodeCount).toEqual(2);
});
