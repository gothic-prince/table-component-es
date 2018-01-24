'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TableFacadeAbstract2 = require('./TableFacadeAbstract');

var _TableFacadeAbstract3 = _interopRequireDefault(_TableFacadeAbstract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableFacade = function (_TableFacadeAbstract) {
  _inherits(TableFacade, _TableFacadeAbstract);

  function TableFacade() {
    _classCallCheck(this, TableFacade);

    /**
     * @private
     */
    var _this = _possibleConstructorReturn(this, (TableFacade.__proto__ || Object.getPrototypeOf(TableFacade)).call(this));

    _this._sortManager = null;
    /**
     * @private
     */
    _this._chooseManager = null;
    /**
     * @private
     */
    _this._columnManager = null;
    /**
     * @private
     */
    _this._paginationManager = null;
    /**
     * @private
     */
    _this._densityManager = null;
    /**
     * @private
     */
    _this._resetManager = null;
    /**
     * @private
     */
    _this._renderManager = null;
    return _this;
  }
  /**
   * @return {ColumnManagerInterface}
   */


  _createClass(TableFacade, [{
    key: 'getColumnManager',
    value: function getColumnManager() {
      return this._columnManager;
    }
    /**
     * @return {RenderManagerInterface}
     */

  }, {
    key: 'getRenderManager',
    value: function getRenderManager() {
      return this._renderManager;
    }
    /**
     * @return {PaginationManagerInterface}
     */

  }, {
    key: 'getPaginationManager',
    value: function getPaginationManager() {
      return this._paginationManager;
    }
    /**
     * @return {DensityManagerInterface}
     */

  }, {
    key: 'getDensityManager',
    value: function getDensityManager() {
      return this._densityManager;
    }
    /**
     * @return {ResetManagerInterface}
     */

  }, {
    key: 'getResetManager',
    value: function getResetManager() {
      return this._resetManager;
    }
    /**
     * @return {SortManagerInterface}
     */

  }, {
    key: 'getSortManager',
    value: function getSortManager() {
      return this._sortManager;
    }
    /**
     * @return {DataSelectorManagerInterface}
     */

  }, {
    key: 'getDataSelectorManager',
    value: function getDataSelectorManager() {
      return this._chooseManager;
    }

    /**
     * @param manager {ColumnManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setColumnManager',
    value: function setColumnManager(manager) {
      this._columnManager = manager;
      return this;
    }
    /**
     * @param manager {RenderManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setRenderManager',
    value: function setRenderManager(manager) {
      this._renderManager = manager;
      return this;
    }
    /**
     * @param manager {PaginationManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setPagination',
    value: function setPagination(manager) {
      this._paginationManager = manager;
      return this;
    }
    /**
     * @param manager {DensityManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setDensity',
    value: function setDensity(manager) {
      this._densityManager = manager;
      return this;
    }
    /**
     * @param manager {ResetManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setReset',
    value: function setReset(manager) {
      this._resetManager = manager;
      return this;
    }
    /**
     * @param manager {SortManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setSortManager',
    value: function setSortManager(manager) {
      this._sortManager = manager;
      return this;
    }
    /**
     * @param manager {DataSelectorManagerInterface}
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'setDataSelectorManager',
    value: function setDataSelectorManager(manager) {
      this._chooseManager = manager;
      return this;
    }
  }]);

  return TableFacade;
}(_TableFacadeAbstract3.default);

exports.default = TableFacade;