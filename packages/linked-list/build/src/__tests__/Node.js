"use strict";
exports.__esModule = true;
var Node_1 = require("../Node");
/*
   Node Tests
*/
test('Jest is working, LinkedListNode is imported', function () {
    expect(typeof Node_1.Node).toBe('function');
});
// test LinkedListNode init
test('LinkedListNode init', function testLinkedListNodeInit() {
    var node = new Node_1.Node('foo');
    expect(typeof node).toEqual('object');
    expect(node.getNodeValue()).toEqual('foo');
    expect(node.nextNode).toEqual(null);
});
// test Node .getNodeValue()
test('Node getNodeValue', function testNodeGetValue() {
    var node = new Node_1.Node('foo');
    expect(node.getNodeValue()).toEqual('foo');
});
// test Node .setNodeValue()
test('Node setNodeValue', function testNodeSetValue() {
    var node = new Node_1.Node('foo');
    node.setNodeValue('bar');
    expect(node.getNodeValue()).toEqual('bar');
});
// test Node .setNodeValue()
test('Node setNextNode', function testNode() {
    var node = new Node_1.Node('foo');
    var otherNode = new Node_1.Node('bar');
    node.setNextNode(otherNode);
    var nextNode = node.getNextNode();
    expect(typeof node.getNextNode()).toBe('object');
    expect(nextNode.getNodeValue()).toEqual('bar');
});
