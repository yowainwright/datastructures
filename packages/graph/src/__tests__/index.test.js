"use strict";
exports.__esModule = true;
var vitest_1 = require("vitest");
var index_1 = require("../index");
(0, vitest_1.describe)('graph', function () {
    (0, vitest_1.describe)('vertex', function () {
        (0, vitest_1.test)('init', function () {
            var result = (0, index_1.vertex)('foo');
            (0, vitest_1.expect)(result.key).toEqual('foo');
            (0, vitest_1.expect)(result.addSibling).toBeDefined();
        });
        (0, vitest_1.test)('siblings', function () {
            var result = (0, index_1.vertex)('foo').addSibling((0, index_1.vertex)('bar'));
            (0, vitest_1.expect)(result.siblings.length).toEqual(1);
            (0, vitest_1.expect)(result.siblings[0].key).toEqual('bar');
        });
    });
    (0, vitest_1.describe)('graph', function () {
        (0, vitest_1.test)('init', function () {
            var result = (0, index_1.graph)();
            (0, vitest_1.expect)(result.directed).toEqual(false);
            (0, vitest_1.expect)(result.vertices).toEqual([]);
            (0, vitest_1.expect)(result.edges).toEqual([]);
        });
        (0, vitest_1.test)('directed', function () {
            var result = (0, index_1.graph)();
            (0, vitest_1.expect)(result.directed).toEqual(false);
        });
        (0, vitest_1.test)('andVertex', function () {
            var result = (0, index_1.graph)().addVertex('foo');
            (0, vitest_1.expect)(result.vertices.length).toEqual(1);
            (0, vitest_1.expect)(result.vertices[0].key).toEqual('foo');
        });
        (0, vitest_1.test)('addEdge', function () {
            var result = (0, index_1.graph)().addVertex('foo').addVertex('bar').addEdge('foo', 'bar');
            (0, vitest_1.expect)(result.edges[0]).toEqual('foo-bar');
        });
    });
});
