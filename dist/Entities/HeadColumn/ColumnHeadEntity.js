'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ColumnHeadEntityInterface = require('./ColumnHeadEntityInterface');

var _ColumnHeadEntityInterface2 = _interopRequireDefault(_ColumnHeadEntityInterface);

var _ParameterShouldBeDefinedException = require('../../Exceptions/ParameterShouldBeDefinedException');

var _ParameterShouldBeDefinedException2 = _interopRequireDefault(_ParameterShouldBeDefinedException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnHeadEntity = function (_ColumnHeadEntityInte) {
  _inherits(ColumnHeadEntity, _ColumnHeadEntityInte);

  function ColumnHeadEntity(name, label) {
    var hidden = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var hiddeable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, ColumnHeadEntity);

    var _this = _possibleConstructorReturn(this, (ColumnHeadEntity.__proto__ || Object.getPrototypeOf(ColumnHeadEntity)).call(this));

    if (name === undefined) {
      throw new _ParameterShouldBeDefinedException2.default(1);
    }
    /**
     * @protected
     */
    _this.name = name;
    /**
     * @protected
     */
    _this.label = label;
    /**
     * @protected
     */
    _this.hidden = hidden;
    /**
     * @protected
     */
    _this.hiddeable = hiddeable;

    /**
     * @protected
     */
    _this.active = false;
    /**
     * @protected
     */
    _this.reversed = false;
    /**
     * @protected
     */
    _this.needSord = true;
    return _this;
  }

  _createClass(ColumnHeadEntity, [{
    key: 'getLabel',
    value: function getLabel() {
      return this.label || this.name;
    }
  }, {
    key: 'isHidden',
    value: function isHidden() {
      return this.hidden;
    }
  }, {
    key: 'setHidden',
    value: function setHidden(value) {
      this.hidden = value;
      return this;
    }
  }, {
    key: 'isHideable',
    value: function isHideable() {
      return this.hiddeable;
    }
  }, {
    key: 'setHideable',
    value: function setHideable(value) {
      this.hiddeable = value;
      return this;
    }
  }, {
    key: 'getFieldName',
    value: function getFieldName() {
      return this.name;
    }
  }, {
    key: 'isActive',
    value: function isActive() {
      return this.active;
    }
  }, {
    key: 'setActive',
    value: function setActive(bool) {
      this.active = bool;
      return this;
    }
  }, {
    key: 'isReverse',
    value: function isReverse() {
      return this.reversed;
    }
  }, {
    key: 'setReverse',
    value: function setReverse(bool) {
      this.reversed = bool;
      return this;
    }
  }, {
    key: 'needSort',
    value: function needSort() {
      return this.needSord;
    }
  }, {
    key: 'setNeedSort',
    value: function setNeedSort(value) {
      this.needSord = value;
    }
  }]);

  return ColumnHeadEntity;
}(_ColumnHeadEntityInterface2.default);

exports.default = ColumnHeadEntity;