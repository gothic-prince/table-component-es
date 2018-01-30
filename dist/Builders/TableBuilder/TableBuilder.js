'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataSelectorManager = require('../../Models/DataSelectorManager/DataSelectorManager');

var _DataSelectorManager2 = _interopRequireDefault(_DataSelectorManager);

var _DensityManager = require('../../Models/DensityManager/DensityManager');

var _DensityManager2 = _interopRequireDefault(_DensityManager);

var _PaginationManager = require('../../Models/PaginationManager/PaginationManager');

var _PaginationManager2 = _interopRequireDefault(_PaginationManager);

var _ResetManager = require('../../Models/ResetManager/ResetManager');

var _ResetManager2 = _interopRequireDefault(_ResetManager);

var _SortManager = require('../../Models/SortManager/SortManager');

var _SortManager2 = _interopRequireDefault(_SortManager);

var _TableBuilderAbstract2 = require('./TableBuilderAbstract');

var _TableBuilderAbstract3 = _interopRequireDefault(_TableBuilderAbstract2);

var _constants = require('../../Builders/TableBuilder/constants');

var _ColumnManager = require('../../Models/ColumnManager/ColumnManager');

var _ColumnManager2 = _interopRequireDefault(_ColumnManager);

var _ColumnEntityFactory = require('../../Factories/ColumnEntityFactory');

var _ColumnEntityFactory2 = _interopRequireDefault(_ColumnEntityFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableBuilder = function (_TableBuilderAbstract) {
  _inherits(TableBuilder, _TableBuilderAbstract);

  /**
   * @param onRender {Function}
   * @param columnManager {ColumnManagerInterface}
   */
  function TableBuilder() {
    var onRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var columnManager = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, TableBuilder);

    var _this = _possibleConstructorReturn(this, (TableBuilder.__proto__ || Object.getPrototypeOf(TableBuilder)).call(this, onRender));

    _this.setColumnManager(columnManager);
    _this._factory = null;
    return _this;
  }
  /**
   * @return {ColumnEntityFactoryInterface}
   */


  _createClass(TableBuilder, [{
    key: 'getFactory',
    value: function getFactory() {
      if (this._factory === null) {
        this._factory = new _ColumnEntityFactory2.default();
      }
      return this._factory;
    }
    /**
     * @param headColumns {ColumnHeadEntityInterface[]}
     * @param getBodyColumns {Function}
     */

  }, {
    key: 'buildColumnManager',
    value: function buildColumnManager(headColumns, getBodyColumns) {
      this.setColumnManager(new _ColumnManager2.default(getBodyColumns, headColumns));
    }
  }, {
    key: 'buildChooseManager',
    value: function buildChooseManager(type) {
      if (type === _constants.TABLE_BUILD_DEFAULT) {
        this.getFacade().setDataSelectorManager(new _DataSelectorManager2.default(this.getRenderManager()));
      }
    }
  }, {
    key: 'buildDensityManager',
    value: function buildDensityManager(type) {
      if (type === _constants.TABLE_BUILD_DEFAULT) {
        this.getFacade().setDensity(new _DensityManager2.default(this.getRenderManager()));
      }
    }
  }, {
    key: 'buildPaginationManager',
    value: function buildPaginationManager(type) {
      if (type === _constants.TABLE_BUILD_DEFAULT) {
        this.getFacade().setPagination(new _PaginationManager2.default(this.getRenderManager()));
      }
    }
  }, {
    key: 'buildResetManager',
    value: function buildResetManager(type) {
      if (type === _constants.TABLE_BUILD_DEFAULT) {
        this.getFacade().setReset(new _ResetManager2.default(this.getRenderManager()));
      }
    }
  }, {
    key: 'buildSortManager',
    value: function buildSortManager(type) {
      if (type === _constants.TABLE_BUILD_DEFAULT) {
        this.getFacade().setSortManager(new _SortManager2.default(this.getRenderManager(), this.getColumnManager()));
      }
    }
  }]);

  return TableBuilder;
}(_TableBuilderAbstract3.default);

exports.default = TableBuilder;