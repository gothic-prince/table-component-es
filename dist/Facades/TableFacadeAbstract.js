'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TableFacadeInterface2 = require('./TableFacadeInterface');

var _TableFacadeInterface3 = _interopRequireDefault(_TableFacadeInterface2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableFacadeAbstract = function (_TableFacadeInterface) {
  _inherits(TableFacadeAbstract, _TableFacadeInterface);

  function TableFacadeAbstract() {
    _classCallCheck(this, TableFacadeAbstract);

    return _possibleConstructorReturn(this, (TableFacadeAbstract.__proto__ || Object.getPrototypeOf(TableFacadeAbstract)).apply(this, arguments));
  }

  _createClass(TableFacadeAbstract, [{
    key: 'getEntities',

    /**
     * @param entities {T[]}
     * @return {T[]}
     */
    value: function getEntities(entities) {
      return this.getPaginationManager().getCutEntities(this.getSortManager().getSortedEntities(entities));
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
    /**
     * @return {PaginationManagerInterface}
     */

  }, {
    key: 'getPaginationManager',
    value: function getPaginationManager() {
      throw new Error('Method "getPaginationManager" should be defined');
    }
    /**
     * @return {DensityManagerInterface}
     */

  }, {
    key: 'getDensityManager',
    value: function getDensityManager() {
      throw new Error('Method "getDensityManager" should be defined');
    }
    /**
     * @return {ResetManagerInterface}
     */

  }, {
    key: 'getResetManager',
    value: function getResetManager() {
      throw new Error('Method "getResetManager" should be defined');
    }
    /**
     * @return {SortManagerInterface}
     */

  }, {
    key: 'getSortManager',
    value: function getSortManager() {
      throw new Error('Method "getSortManager" should be defined');
    }
    /**
     * @return {DataSelectorManagerInterface}
     */

  }, {
    key: 'getDataSelectorManager',
    value: function getDataSelectorManager() {
      throw new Error('Method "getDataSelectorManager" should be defined');
    }

    /**
     * @param manager {ColumnManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setColumnManager',
    value: function setColumnManager(manager) {
      throw new Error('Method "setColumnManager" should be defined');
    }
    /**
     * @param manager {RenderManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setRenderManager',
    value: function setRenderManager(manager) {
      throw new Error('Method "setRenderManager" should be defined');
    }
    /**
     * @param manager {PaginationManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setPagination',
    value: function setPagination(manager) {
      throw new Error('Method "setPagination" should be defined');
    }
    /**
     * @param manager {DensityManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setDensity',
    value: function setDensity(manager) {
      throw new Error('Method "setDensity" should be defined');
    }
    /**
     * @param manager {ResetManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setReset',
    value: function setReset(manager) {
      throw new Error('Method "setReset" should be defined');
    }
    /**
     * @param manager {SortManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setSortManager',
    value: function setSortManager(manager) {
      throw new Error('Method "setSortManager" should be defined');
    }
    /**
     * @param manager {DataSelectorManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setDataSelectorManager',
    value: function setDataSelectorManager(manager) {
      throw new Error('Method "setChooseManager" should be defined');
    }
  }]);

  return TableFacadeAbstract;
}(_TableFacadeInterface3.default);

exports.default = TableFacadeAbstract;