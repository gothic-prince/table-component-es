'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RenderManagerInterface = require('./RenderManagerInterface');

var _RenderManagerInterface2 = _interopRequireDefault(_RenderManagerInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderManager = function (_RenderManagerInterfa) {
  _inherits(RenderManager, _RenderManagerInterfa);

  /**
   * @param onRender {Function}
   */
  function RenderManager() {
    var onRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, RenderManager);

    /**
     * @type {Function[]}
     * @private
     */
    var _this = _possibleConstructorReturn(this, (RenderManager.__proto__ || Object.getPrototypeOf(RenderManager)).call(this));

    _this._events = [];
    if (onRender !== null) {
      _this.addEvent(onRender);
    }
    return _this;
  }

  _createClass(RenderManager, [{
    key: 'reRenderView',
    value: function reRenderView() {
      this._events.map(function (event) {
        event();
      });
    }
  }, {
    key: 'addEvent',
    value: function addEvent(onRender) {
      this._events.push(onRender);
    }
  }]);

  return RenderManager;
}(_RenderManagerInterface2.default);

exports.default = RenderManager;