(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('linked-list/index')) :
  typeof define === 'function' && define.amd ? define(['linked-list/index'], factory) :
  (global.DateStructures = factory(global.LinkedList));
}(this, (function (LinkedList) { 'use strict';

  LinkedList = LinkedList && LinkedList.hasOwnProperty('default') ? LinkedList['default'] : LinkedList;

  var index = {
    LinkedList
  }

  return index;

})));
//# sourceMappingURL=data-structures.js.map
