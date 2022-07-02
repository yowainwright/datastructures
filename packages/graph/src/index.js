"use strict";
/**
 * Graph 📈📉
 * ----
 * @description A collection of vertices and edges
 * @summary A collection of vertices related by edges
 * @note if you desire to add more functionality
 * - to this minimal Stack,
 * - submit a pull request
 */
exports.__esModule = true;
exports.graph = exports.vertex = void 0;
var vertex = function (key, siblings) {
    if (siblings === void 0) { siblings = []; }
    return ({
        key: key,
        siblings: siblings,
        addSibling: function (vertex) {
            siblings.push(vertex);
            return this;
        }
    });
};
exports.vertex = vertex;
var graph = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.directed, directed = _c === void 0 ? false : _c, _d = _b.vertices, vertices = _d === void 0 ? [] : _d, _e = _b.edges, edges = _e === void 0 ? [] : _e;
    return ({
        directed: directed,
        vertices: vertices,
        edges: edges,
        addVertex: function (key) {
            this.vertices.push((0, exports.vertex)(key));
            return this;
        },
        getVertex: function (key) { return vertices.find(function (vertex) { return vertex.key === key; }); },
        addEdge: function (key1, key2) {
            var vertex1 = this.getVertex(key1);
            var vertex2 = this.getVertex(key2);
            vertex1.addSibling(vertex2.key);
            edges.push("".concat(key1, "-").concat(key2));
            if (!directed) {
                vertex2.addSibling(vertex1.key);
            }
            return this;
        },
        render: function () {
            return {
                directed: directed,
                vertices: vertices,
                edges: edges
            };
        }
    });
};
exports.graph = graph;
// Quokka testing 💅
// -----------------
// const point = vertex('foo')
// const chart = graph().addVertex('foo').addVertex('bar')
// chart.addEdge('foo', 'bar')
// point
// const viewChart = chart.render()
// viewChart
// const printChart = chart.print()
// printChart
