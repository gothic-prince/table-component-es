'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ColumnManagerInterface = require('./ColumnManagerInterface');

var _ColumnManagerInterface2 = _interopRequireDefault(_ColumnManagerInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnManager = function (_ColumnManagerInterfa) {
  _inherits(ColumnManager, _ColumnManagerInterfa);

  /**
   * @param table {RenderManagerInterface}
   * @param getBody {Function}
   * @param headers {ColumnHeadEntityInterface[]}
   */
  function ColumnManager(table, getBody, headers) {
    _classCallCheck(this, ColumnManager);

    var _this = _possibleConstructorReturn(this, (ColumnManager.__proto__ || Object.getPrototypeOf(ColumnManager)).call(this));

    _this._getBody = getBody;
    _this._headers = headers;
    _this._table = table;
    return _this;
  }

  /**
   * @param entity
   * @return {ColumnBodyEntityInterface[]}
   */


  _createClass(ColumnManager, [{
    key: 'createBodyColumns',
    value: function createBodyColumns(entity) {
      return this._getBody(entity);
    }
    /**
     * @return {ColumnHeadEntityInterface[]}
     */

  }, {
    key: 'getHeadColumns',
    value: function getHeadColumns() {
      return this._headers;
    }
    /**
     * @param column {ColumnBodyEntityInterface}
     * @param type {String}
     */

  }, {
    key: 'handleChangeHeadColumn',
    value: function handleChangeHeadColumn(column, type) {
      this._table.reRenderView();
    }
  }]);

  return ColumnManager;
}(_ColumnManagerInterface2.default);

exports.default = ColumnManager;