"use strict";
exports.__esModule = true;
var __1 = require("..");
var Node_1 = require("../Node");
// test LinkedListNode(node)
test('LinkedList init', function testLinkedList() {
    var node = new Node_1.Node('foo');
    var otherNode = new Node_1.Node('bar');
    var list = new __1.LinkedList(node);
    expect(list.headNode.value).toEqual('foo');
});
// test LinkedListNode .appendNode(value)
test('LinkedList appendNode', function appendNode() {
    var list = new __1.LinkedList();
    list.appendNode('foo');
    expect(list.length()).toEqual(1);
    expect(list.headNode.value).toEqual('foo');
});
// test LinkedListNode .findNode(value)
test('LinkedList addLastNode', function addLastNode() {
    var list = new __1.LinkedList();
    list.appendNode('foo');
    expect(list.length()).toEqual(1);
    expect(list.headNode.value).toEqual('foo');
    list.appendNode('bar');
    expect(list.length()).toEqual(2);
    var lastNode = list.findNode('bar');
    expect(lastNode.value).toEqual('bar');
});
// // test LinkedListNode .addAfterNode()
// test('LinkedList addAfterNode', function addAfterNode () {
//   const list = new LinkedList()
//   list.addFirstNode('foo')
//   expect(list.nodeCount).toEqual(1)
//   expect(list.headNode.value).toEqual('foo')
//   list.addLastNode('bar')
//   list.addAfterNode('foo', 'biz')
//   expect(list.nodeCount).toEqual(3)
// })
// // test LinkedListNode .addBeforeNode()
// test('LinkedList addBeforeNode', function addBeforeNode () {
//   const list = new LinkedList()
//   list.addFirstNode('foo')
//   expect(list.nodeCount).toEqual(1)
//   list.addBeforeNode('foo', 'bar')
//   expect(list.nodeCount).toEqual(2)
// })
