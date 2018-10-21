"use strict";
exports.__esModule = true;
var Node_1 = require("../Node");
test('Node init', function testNodeInit() {
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
test('Node setNodeValue', function testSetNodeValue() {
    var node = new Node_1.Node('foo');
    node.setNodeValue('bar');
    expect(node.getNodeValue()).toEqual('bar');
});
// test Node .setNodeValue() .getNextNode()
test('Node setNextNode and getNextNode', function testSetGetNextNode() {
    var node = new Node_1.Node('foo');
    var otherNode = new Node_1.Node('bar');
    node.setNextNode(otherNode);
    var nextNode = node.getNextNode();
    expect(typeof node.getNextNode()).toBe('object');
    expect(nextNode.getNodeValue()).toEqual('bar');
});
