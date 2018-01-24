'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SortManagerInterface2 = require('./SortManagerInterface');

var _SortManagerInterface3 = _interopRequireDefault(_SortManagerInterface2);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortManager = function (_SortManagerInterface) {
  _inherits(SortManager, _SortManagerInterface);

  /**
   * @param render {RenderManagerInterface}
   * @param columnManager {ColumnManagerInterface}
   */
  function SortManager(render, columnManager) {
    _classCallCheck(this, SortManager);

    /**
     * @type {RenderManagerInterface}
     * @private
     */
    var _this = _possibleConstructorReturn(this, (SortManager.__proto__ || Object.getPrototypeOf(SortManager)).call(this));

    _this._render = render;
    /**
     * @type {ColumnManagerInterface}
     * @private
     */
    _this._columnManager = columnManager;
    /**
     * @type {string}
     * @private
     */
    _this._field = '';
    return _this;
  }

  /**
   * @protected
   */


  _createClass(SortManager, [{
    key: 'handleChange',
    value: function handleChange() {
      this._render.reRenderView();
    }

    /**
     * @protected
     * @return {ColumnManagerInterface}
     */

  }, {
    key: 'getColumnManager',
    value: function getColumnManager() {
      return this._columnManager;
    }
    /**
     * @protected
     * @return {ColumnHeadEntityInterface|null}
     */

  }, {
    key: 'getActiveHead',
    value: function getActiveHead() {
      return this.getColumnManager().getHeadColumns().find(function (column) {
        return column.isActive() === true;
      }) || null;
    }
  }, {
    key: 'getSortedEntities',
    value: function getSortedEntities(entities) {
      var _this2 = this;

      var header = this.getActiveHead() || null;

      if (header === null || header.needSort() === false) {
        return entities;
      }
      return entities.sort(function (entity1, entity2) {
        /**
         * @param column {ColumnBodyEntityInterface}
         */
        var findColumnByName = function findColumnByName(column) {
          return column.getName() === header.getFieldName();
        };
        var column1 = _this2.getColumnManager().createBodyColumns(entity1).find(findColumnByName);
        var column2 = _this2.getColumnManager().createBodyColumns(entity2).find(findColumnByName);
        var value1 = column1.getRawValue();
        var value2 = column2.getRawValue();
        if (value1 === undefined || value2 === undefined) {
          return 0;
        }
        if (value1 < value2) return header.isReverse() ? 1 : -1;
        if (value1 > value2) return header.isReverse() ? -1 : 1;
        return 0;
      });
    }

    /**
     * @protected
     * @param column {ColumnHeadEntityInterface}
     * @param forceReverse
     * @return {Boolean}
     */

  }, {
    key: 'isRevers',
    value: function isRevers(column, forceReverse) {
      if (forceReverse !== null) {
        return forceReverse;
      }
      if (column.getFieldName() === this._field) {
        return !column.isReverse();
      }
      return _constants.TABLE_SORT_DESC;
    }
  }, {
    key: 'by',
    value: function by(field) {
      var _this3 = this;

      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.getColumnManager().getHeadColumns().map(function (entity) {
        if (entity.getFieldName() === field) {
          entity.setReverse(_this3.isRevers(entity, reverse));
          entity.setActive(true);
          _this3._field = field;
        } else {
          entity.setActive(false);
        }
        return entity;
      });
      this.handleChange();
    }
  }]);

  return SortManager;
}(_SortManagerInterface3.default);

exports.default = SortManager;