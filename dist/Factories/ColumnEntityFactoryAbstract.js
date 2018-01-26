'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ColumnEntityFactoryInterface = require('./ColumnEntityFactoryInterface');

var _ColumnEntityFactoryInterface2 = _interopRequireDefault(_ColumnEntityFactoryInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnEntityFactoryAbstract = function (_ColumnEntityFactoryI) {
  _inherits(ColumnEntityFactoryAbstract, _ColumnEntityFactoryI);

  function ColumnEntityFactoryAbstract() {
    var firstIsMain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, ColumnEntityFactoryAbstract);

    /**
     * @type {ColumnBodyEntityInterface[]}
     * @private
     */
    var _this = _possibleConstructorReturn(this, (ColumnEntityFactoryAbstract.__proto__ || Object.getPrototypeOf(ColumnEntityFactoryAbstract)).call(this));

    _this._bodies = [];

    /**
     * @type {ColumnHeadEntityInterface[]}
     * @private
     */
    _this._headers = [];

    /**
     * @type {boolean}
     * @private
     */
    _this._firstIsMain = firstIsMain;
    return _this;
  }
  /**
   * @protected
   * @param name {String}
   * @param label {String}
   * @param hideable {Boolean}
   * @param hidden {Boolean}
   * @param sortable {Boolean}
   * @return {ColumnHeadEntityInterface}
   */


  _createClass(ColumnEntityFactoryAbstract, [{
    key: 'createHeadColumn',
    value: function createHeadColumn(name, label, hideable, hidden, sortable) {
      throw new Error('Method "createHeadColumn" should be defined');
    }

    /**
     * @protected
     * @param name {String}
     * @param row
     * @param html
     * @return {ColumnBodyEntityInterface}
     */

  }, {
    key: 'createBodyColumn',
    value: function createBodyColumn(name, row, html) {
      throw new Error('Method "createBodyColumn" should be defined');
    }

    /**
     * @param name {String}
     * @param label {String}
     * @param hideable {Boolean}
     * @param hidden {Boolean}
     * @param sortable {Boolean}
     * @return {ColumnEntityFactoryInterface}
     */

  }, {
    key: 'addHeader',
    value: function addHeader(name) {
      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var hideable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var hidden = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var sortable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

      var isFirstMain = this._headers.length === 0 && this._firstIsMain === true;
      this._headers.push(this.createHeadColumn(name, label === null ? name : label, isFirstMain === true ? false : hideable, //   hideable
      isFirstMain === true ? false : hidden, //  hidden
      sortable //  sortable
      ));
      return this;
    }

    /**
     * @param name {String}
     * @param row
     * @param html
     * @return {ColumnEntityFactoryInterface}
     */

  }, {
    key: 'addBody',
    value: function addBody(name, row, html) {
      this._bodies.push(this.createBodyColumn(name, row, html));
      return this;
    }

    /**
     * @return {ColumnBodyEntityInterface[]}
     */

  }, {
    key: 'getBodies',
    value: function getBodies() {
      var bodies = [].concat(this._bodies);
      this._bodies = [];
      return bodies;
    }
    /**
     * @return {ColumnHeadEntityInterface[]}
     */

  }, {
    key: 'getHeaders',
    value: function getHeaders() {
      var heads = [].concat(this._headers);
      this._headers = [];
      return heads;
    }
  }]);

  return ColumnEntityFactoryAbstract;
}(_ColumnEntityFactoryInterface2.default);

exports.default = ColumnEntityFactoryAbstract;