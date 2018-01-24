'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DensityManagerInterface = require('./DensityManagerInterface');

var _DensityManagerInterface2 = _interopRequireDefault(_DensityManagerInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DensityManager = function (_DensityManagerInterf) {
  _inherits(DensityManager, _DensityManagerInterf);

  /**
   * @param table {RenderManagerInterface}
   * @param density {Number}
   */
  function DensityManager(table) {
    var density = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    _classCallCheck(this, DensityManager);

    var _this = _possibleConstructorReturn(this, (DensityManager.__proto__ || Object.getPrototypeOf(DensityManager)).call(this));

    _this.table = table;
    _this.density = density;
    return _this;
  }

  _createClass(DensityManager, [{
    key: 'setDensity',
    value: function setDensity(density) {
      this.density = density;
      this.table.reRenderView();
    }
  }, {
    key: 'getDensity',
    value: function getDensity() {
      return this.density;
    }
  }]);

  return DensityManager;
}(_DensityManagerInterface2.default);

exports.default = DensityManager;