(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Node = function (name, data, nextNode) {
        if (data === void 0) { data = null; }
        if (nextNode === void 0) { nextNode = null; }
        return ({
            name: name,
            data: data,
            nextNode: nextNode,
        });
    };
});
//# sourceMappingURL=Node.js.map