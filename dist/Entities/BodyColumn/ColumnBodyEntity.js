'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ColumnBodyEntityInterface = require('./ColumnBodyEntityInterface');

var _ColumnBodyEntityInterface2 = _interopRequireDefault(_ColumnBodyEntityInterface);

var _ParameterShouldBeDefinedException = require('../../Exceptions/ParameterShouldBeDefinedException');

var _ParameterShouldBeDefinedException2 = _interopRequireDefault(_ParameterShouldBeDefinedException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnBodyEntity = function (_ColumnBodyEntityInte) {
  _inherits(ColumnBodyEntity, _ColumnBodyEntityInte);

  /**
   * @param name {String}
   * @param row
   * @param html {String|Number}
   */
  function ColumnBodyEntity(name, row, html) {
    _classCallCheck(this, ColumnBodyEntity);

    var _this = _possibleConstructorReturn(this, (ColumnBodyEntity.__proto__ || Object.getPrototypeOf(ColumnBodyEntity)).call(this));

    if (name === undefined) {
      throw new _ParameterShouldBeDefinedException2.default(1);
    }
    if (row === undefined) {
      throw new _ParameterShouldBeDefinedException2.default(2);
    }
    /**
     * @protected
     */
    _this.name = name;
    /**
     * @protected
     */
    _this.row = row;
    /**
     * @protected
     */
    _this.html = html || row;
    return _this;
  }

  _createClass(ColumnBodyEntity, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getRawValue',
    value: function getRawValue() {
      return this.row;
    }
  }, {
    key: 'getHtmlValue',
    value: function getHtmlValue() {
      return this.html;
    }
  }]);

  return ColumnBodyEntity;
}(_ColumnBodyEntityInterface2.default);

exports.default = ColumnBodyEntity;