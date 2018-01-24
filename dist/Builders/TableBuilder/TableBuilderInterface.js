'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableBuilderInterface = function () {
  function TableBuilderInterface() {
    _classCallCheck(this, TableBuilderInterface);
  }

  _createClass(TableBuilderInterface, [{
    key: 'buildChooseManager',
    value: function buildChooseManager(type) {
      throw new Error('Method "buildChooseManager" should be defined');
    }
  }, {
    key: 'buildDensityManager',
    value: function buildDensityManager(type) {
      throw new Error('Method "buildDensityManager" should be defined');
    }
  }, {
    key: 'buildPaginationManager',
    value: function buildPaginationManager(type) {
      throw new Error('Method "buildPaginationManager" should be defined');
    }
  }, {
    key: 'buildResetManager',
    value: function buildResetManager(type) {
      throw new Error('Method "buildResetManager" should be defined');
    }
  }, {
    key: 'buildSortManager',
    value: function buildSortManager(type) {
      throw new Error('Method "buildSortManager" should be defined');
    }
    /**
     * @return {TableFacadeInterface}
     */

  }, {
    key: 'getTableFacade',
    value: function getTableFacade() {
      throw new Error('Method "getTableFacade" should be defined');
    }
  }]);

  return TableBuilderInterface;
}();

exports.default = TableBuilderInterface;