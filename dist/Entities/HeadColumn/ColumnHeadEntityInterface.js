"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColumnHeadEntityInterface = function () {
  function ColumnHeadEntityInterface() {
    _classCallCheck(this, ColumnHeadEntityInterface);
  }

  _createClass(ColumnHeadEntityInterface, [{
    key: "getLabel",
    value: function getLabel() {}
  }, {
    key: "isHidden",
    value: function isHidden() {}
  }, {
    key: "setHidden",
    value: function setHidden(value) {}
  }, {
    key: "isHideable",
    value: function isHideable() {}
  }, {
    key: "setHideable",
    value: function setHideable(value) {}
  }, {
    key: "getFieldName",
    value: function getFieldName() {}
  }, {
    key: "isReverse",
    value: function isReverse() {}
  }, {
    key: "isActive",
    value: function isActive() {}
  }, {
    key: "setActive",
    value: function setActive(bool) {}
  }, {
    key: "setReverse",
    value: function setReverse(bool) {}
  }, {
    key: "needSort",
    value: function needSort() {}
    /**
     * @param columnManager {ColumnManagerInterface}
     * @return {ColumnHeadEntity}
     */

  }, {
    key: "setColumnManager",
    value: function setColumnManager(columnManager) {}
  }]);

  return ColumnHeadEntityInterface;
}();

exports.default = ColumnHeadEntityInterface;