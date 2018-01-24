'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PaginationManagerInterface = require('./PaginationManagerInterface');

var _PaginationManagerInterface2 = _interopRequireDefault(_PaginationManagerInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationManager = function (_PaginationManagerInt) {
  _inherits(PaginationManager, _PaginationManagerInt);

  /**
   * @param table {RenderManagerInterface}
   */
  function PaginationManager(table) {
    _classCallCheck(this, PaginationManager);

    /**
     * @type {RenderManagerInterface}
     * @private
     */
    var _this = _possibleConstructorReturn(this, (PaginationManager.__proto__ || Object.getPrototypeOf(PaginationManager)).call(this));

    _this._table = table;
    /**
     * @type {Number}
     * @private
     */
    _this._page = 1;
    /**
     * @type {Number}
     * @private
     */
    _this._limitRows = 10;
    /**
     * @type {Number[]}
     * @private
     */
    _this._limitRowsArray = [10, 25, 50, 100];
    return _this;
  }

  _createClass(PaginationManager, [{
    key: 'handleChange',
    value: function handleChange() {
      this._table.reRenderView();
    }
  }, {
    key: 'first',
    value: function first(entities) {
      this.setCurrentPage(1);
    }
  }, {
    key: 'prev',
    value: function prev(entities) {
      var newPage = this._page - 1;
      if (this.hasPrev(entities)) {
        this.setCurrentPage(newPage);
      }
    }
  }, {
    key: 'next',
    value: function next(entities) {
      var newPage = this._page + 1;
      if (this.hasNext(entities)) {
        this.setCurrentPage(newPage);
      }
    }
  }, {
    key: 'latest',
    value: function latest(entities) {
      this.setCurrentPage(this.getLatestPage(entities));
    }
  }, {
    key: 'setCurrentPage',
    value: function setCurrentPage(pageNumber) {
      this._page = pageNumber;
      this.handleChange();
    }
  }, {
    key: 'getCurrentPage',
    value: function getCurrentPage() {
      return this._page;
    }
  }, {
    key: 'hasPrev',
    value: function hasPrev(entities) {
      return this._page - 1 >= 1;
    }
  }, {
    key: 'hasNext',
    value: function hasNext(entities) {
      return this._page + 1 <= this.getLatestPage(entities);
    }
  }, {
    key: 'getLimitRows',
    value: function getLimitRows() {
      return this._limitRows;
    }
  }, {
    key: 'setLimitRows',
    value: function setLimitRows(max) {
      this._limitRows = max;
      this.handleChange();
    }
  }, {
    key: 'getArrayLimitRows',
    value: function getArrayLimitRows() {
      return this._limitRowsArray;
    }
  }, {
    key: 'setArrayLimitRows',
    value: function setArrayLimitRows(numbers) {
      this._limitRowsArray = numbers;
      this.handleChange();
    }
  }, {
    key: 'getCutEntities',
    value: function getCutEntities(entities) {
      var endIndex = this.getCurrentPage() * this.getLimitRows();
      var startIndex = endIndex - this.getLimitRows();
      return entities.slice(startIndex, endIndex);
    }
  }, {
    key: 'getLatestPage',
    value: function getLatestPage(entities) {
      return Math.ceil(entities.length / this.getLimitRows());
    }
  }]);

  return PaginationManager;
}(_PaginationManagerInterface2.default);

exports.default = PaginationManager;