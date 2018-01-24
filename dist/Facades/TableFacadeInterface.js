'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @template {T}
 */
var TableFacadeInterface = function () {
  function TableFacadeInterface() {
    _classCallCheck(this, TableFacadeInterface);
  }

  _createClass(TableFacadeInterface, [{
    key: 'getEntities',

    /**
     * @param entities {T[]}
     * @return {T[]}
     */
    value: function getEntities(entities) {
      throw new Error('Method "getEntities" should be defined');
    }
    /**
     * @return {ColumnManagerInterface}
     */

  }, {
    key: 'getColumnManager',
    value: function getColumnManager() {
      throw new Error('Method "getColumnManager" should be defined');
    }
    /**
     * @return {RenderManagerInterface}
     */

  }, {
    key: 'getRenderManager',
    value: function getRenderManager() {
      throw new Error('Method "getRenderManager" should be defined');
    }
  }]);

  return TableFacadeInterface;
}();

exports.default = TableFacadeInterface;