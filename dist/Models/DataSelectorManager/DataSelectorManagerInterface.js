"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataSelectorManagerInterface = function () {
  function DataSelectorManagerInterface() {
    _classCallCheck(this, DataSelectorManagerInterface);
  }

  _createClass(DataSelectorManagerInterface, [{
    key: "add",
    value: function add(entity) {}
    /**
     * @param entities {Array}
     */

  }, {
    key: "set",
    value: function set(entities) {}

    /**
     * @return {Array}
     */

  }, {
    key: "get",
    value: function get() {}
    /**
     * @param entity
     * @return {Boolean}
     */

  }, {
    key: "isChosen",
    value: function isChosen(entity) {}
    /**
     * @param entity1
     * @param entity2
     * @return {boolean}
     */

  }, {
    key: "comparison",
    value: function comparison(entity1, entity2) {}
  }]);

  return DataSelectorManagerInterface;
}();

exports.default = DataSelectorManagerInterface;