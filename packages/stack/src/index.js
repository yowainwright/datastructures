"use strict";
/**
 * Stack
 * ----
 * @description An ordered structure of data inputs obeying the principle of last in, first out.
 * @summary a typed functional Stack
 * @note if you desire to add more functionality
 * - to this minimal Stack,
 * - submit a pull request
 */
exports.__esModule = true;
exports.stack = void 0;
var stack = function (list) {
    if (list === void 0) { list = []; }
    return ({
        add: function (item) {
            list.push(item);
            return this;
        },
        remove: function () {
            list.pop();
            return this;
        },
        length: function () { return list.length; },
        print: function () { return list; }
    });
};
exports.stack = stack;
