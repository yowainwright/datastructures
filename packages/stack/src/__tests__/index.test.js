"use strict";
exports.__esModule = true;
var vitest_1 = require("vitest");
var index_1 = require("../index");
(0, vitest_1.describe)('stack', function () {
    (0, vitest_1.test)('init', function () {
        var result = (0, index_1.stack)();
        (0, vitest_1.expect)(Object.keys(result)).toEqual(['add', 'remove', 'length', 'print']);
    });
    (0, vitest_1.test)('add', function () {
        var result = (0, index_1.stack)().add('foo');
        (0, vitest_1.expect)(result.print()).toEqual(['foo']);
    });
    (0, vitest_1.test)('remove', function () {
        var result = (0, index_1.stack)().add('foo').add('bar').remove();
        (0, vitest_1.expect)(result.print()).toEqual(['foo']);
    });
    (0, vitest_1.test)('length', function () {
        var result = (0, index_1.stack)().add('foo').add('bar');
        (0, vitest_1.expect)(result.length()).toEqual(2);
    });
    (0, vitest_1.test)('print', function () {
        var result = (0, index_1.stack)().add('foo').add('bar');
        (0, vitest_1.expect)(result.print()).toEqual(['foo', 'bar']);
    });
});
