"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaginationManagerInterface = function () {
  function PaginationManagerInterface() {
    _classCallCheck(this, PaginationManagerInterface);
  }

  _createClass(PaginationManagerInterface, [{
    key: "first",

    /**
     * @param entities {Array}
     */
    value: function first(entities) {}
    /**
     * @param entities {Array}
     */

  }, {
    key: "prev",
    value: function prev(entities) {}
    /**
     * @param entities {Array}
     */

  }, {
    key: "next",
    value: function next(entities) {}
    /**
     * @param entities {Array}
     */

  }, {
    key: "latest",
    value: function latest(entities) {}
    /**
     * @param entities
     * @return {Boolean}
     */

  }, {
    key: "hasPrev",
    value: function hasPrev(entities) {}
    /**
     * @param entities
     * @return {Boolean}
     */

  }, {
    key: "hasNext",
    value: function hasNext(entities) {}
    /**
     * @param pageNumber {Number}
     */

  }, {
    key: "setCurrentPage",
    value: function setCurrentPage(pageNumber) {}
    /**
     * @return {Number}
     */

  }, {
    key: "getCurrentPage",
    value: function getCurrentPage() {}
    /**
     * @param entities
     * @return {Number}
     */

  }, {
    key: "getLatestPage",
    value: function getLatestPage(entities) {}
    /**
     * @return {Number}
     */

  }, {
    key: "getLimitRows",
    value: function getLimitRows() {}
    /**
     * @param max {Number}
     */

  }, {
    key: "setLimitRows",
    value: function setLimitRows(max) {}
    /**
     * @return {Number[]}
     */

  }, {
    key: "getArrayLimitRows",
    value: function getArrayLimitRows() {}
    /**
     * @param entities {Array}
     * @return {Array}
     */

  }, {
    key: "getCutEntities",
    value: function getCutEntities(entities) {}
  }]);

  return PaginationManagerInterface;
}();

exports.default = PaginationManagerInterface;