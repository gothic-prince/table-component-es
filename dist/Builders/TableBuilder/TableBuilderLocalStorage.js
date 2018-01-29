'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = require('../TableBuilder/constants');

var _StorageInterface = require('storage-manager-es/dist/StorageInterface');

var _StorageInterface2 = _interopRequireDefault(_StorageInterface);

var _StorageLocal = require('storage-manager-es/dist/StorageLocal');

var _StorageLocal2 = _interopRequireDefault(_StorageLocal);

var _TableBuilder2 = require('./TableBuilder');

var _TableBuilder3 = _interopRequireDefault(_TableBuilder2);

var _DensityManagerWithStorage = require('../../Models/DensityManager/DensityManagerWithStorage');

var _DensityManagerWithStorage2 = _interopRequireDefault(_DensityManagerWithStorage);

var _ColumnEntityStorageFactory = require('../../Factories/ColumnEntityStorageFactory');

var _ColumnEntityStorageFactory2 = _interopRequireDefault(_ColumnEntityStorageFactory);

var _constants2 = require('../../Entities/HeadColumn/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableBuilderLocalStorage = function (_TableBuilder) {
  _inherits(TableBuilderLocalStorage, _TableBuilder);

  /**
   * @param onRender {Function}
   * @param tableName {String}
   * @param storage {StorageInterface}
   */
  function TableBuilderLocalStorage(onRender, tableName) {
    var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _StorageLocal2.default();

    _classCallCheck(this, TableBuilderLocalStorage);

    var _this = _possibleConstructorReturn(this, (TableBuilderLocalStorage.__proto__ || Object.getPrototypeOf(TableBuilderLocalStorage)).call(this, onRender));

    _this.tableName = tableName;
    _this.storage = storage;
    return _this;
  }
  /**
   * @protected
   * @return {String[]}
   */


  _createClass(TableBuilderLocalStorage, [{
    key: 'getOptions',
    value: function getOptions() {
      return [_constants2.COLUMN_STORAGE_HIDDEN];
    }
    /**
     * @return {ColumnEntityFactoryInterface}
     */

  }, {
    key: 'getFactory',
    value: function getFactory() {
      if (this._factory === null) {
        this._factory = new _ColumnEntityStorageFactory2.default(this.getTableName(), this.getOptions(), this.getStorage());
      }
      return this._factory;
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
    key: 'getTableName',
    value: function getTableName() {
      return this.tableName;
    }
  }, {
    key: 'buildDensityManager',
    value: function buildDensityManager(type) {
      switch (type) {
        case _constants.TABLE_BUILD_STORAGE:
          this.getFacade().setDensity(new _DensityManagerWithStorage2.default(this.getRenderManager(), this.getStorage(), this.getTableName()));
          break;
        default:
          _get(TableBuilderLocalStorage.prototype.__proto__ || Object.getPrototypeOf(TableBuilderLocalStorage.prototype), 'buildDensityManager', this).call(this, _constants.TABLE_BUILD_DEFAULT);
          break;
      }
    }
  }]);

  return TableBuilderLocalStorage;
}(_TableBuilder3.default);

exports.default = TableBuilderLocalStorage;