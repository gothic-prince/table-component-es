"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColumnEntityFactoryInterface = function () {
  function ColumnEntityFactoryInterface() {
    _classCallCheck(this, ColumnEntityFactoryInterface);
  }

  _createClass(ColumnEntityFactoryInterface, [{
    key: "addHeader",

    /**
     * @param name {String}
     * @param label {String}
     * @param hideable {Boolean}
     * @param hidden {Boolean}
     * @param sortable {Boolean}
     * @return {ColumnEntityFactoryInterface}
     */
    value: function addHeader(name) {
      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var hideable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var hidden = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var sortable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    }

    /**
     * @param name {String}
     * @param row
     * @param html
     * @return {ColumnEntityFactoryInterface}
     */

  }, {
    key: "addBody",
    value: function addBody(name, row) {
      var html = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    }

    /**
     * @return {ColumnBodyEntityInterface[]}
     */

  }, {
    key: "getBodies",
    value: function getBodies() {}
    /**
     * @return {ColumnHeadEntityInterface[]}
     */

  }, {
    key: "getHeaders",
    value: function getHeaders() {}
  }]);

  return ColumnEntityFactoryInterface;
}();

exports.default = ColumnEntityFactoryInterface;