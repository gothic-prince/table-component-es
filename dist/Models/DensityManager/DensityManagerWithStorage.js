'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DensityManagerInterface = require('./DensityManagerInterface');

var _DensityManagerInterface2 = _interopRequireDefault(_DensityManagerInterface);

var _StorageInterface = require('storage-manager-es/dist/StorageInterface');

var _StorageInterface2 = _interopRequireDefault(_StorageInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DensityManagerWithStorage = function (_DensityManagerInterf) {
  _inherits(DensityManagerWithStorage, _DensityManagerInterf);

  /**
   * @param table {RenderManagerInterface}
   * @param storage {StorageInterface}
   * @param tableName {String}
   * @param density {Number}
   */
  function DensityManagerWithStorage(table, storage, tableName) {
    var density = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;

    _classCallCheck(this, DensityManagerWithStorage);

    var _this = _possibleConstructorReturn(this, (DensityManagerWithStorage.__proto__ || Object.getPrototypeOf(DensityManagerWithStorage)).call(this));

    _this.table = table;
    _this.storage = storage;
    _this.tableName = tableName;
    if (_this.getStorage().hasKey(_this.getKeyName()) === false) {
      _this.getStorage().setData(_this.getKeyName(), density);
    }
    return _this;
  }

  _createClass(DensityManagerWithStorage, [{
    key: 'setDensity',
    value: function setDensity(density) {
      this.getStorage().setData(this.getKeyName(), density);
      this.table.reRenderView();
    }
  }, {
    key: 'getDensity',
    value: function getDensity() {
      return Number(this.getStorage().getData(this.getKeyName()));
    }
    /**
     * @protected
     * @return {StorageInterface}
     */

  }, {
    key: 'getStorage',
    value: function getStorage() {
      return this.storage;
    }
    /**
     * @protected
     * @return {string}
     */

  }, {
    key: 'getKeyName',
    value: function getKeyName() {
      return this.tableName + '__density';
    }
  }]);

  return DensityManagerWithStorage;
}(_DensityManagerInterface2.default);

exports.default = DensityManagerWithStorage;