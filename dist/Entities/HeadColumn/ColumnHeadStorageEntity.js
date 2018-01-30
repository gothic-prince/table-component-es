'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _StorageLocal = require('storage-manager-es/dist/StorageLocal');

var _StorageLocal2 = _interopRequireDefault(_StorageLocal);

var _StorageInterface = require('storage-manager-es/dist/StorageInterface');

var _StorageInterface2 = _interopRequireDefault(_StorageInterface);

var _ColumnHeadEntity2 = require('./ColumnHeadEntity');

var _ColumnHeadEntity3 = _interopRequireDefault(_ColumnHeadEntity2);

var _boolean = require('boolean');

var _boolean2 = _interopRequireDefault(_boolean);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnHeadStorageEntity = function (_ColumnHeadEntity) {
  _inherits(ColumnHeadStorageEntity, _ColumnHeadEntity);

  function ColumnHeadStorageEntity(name, label) {
    var hidden = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var hiddeable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, ColumnHeadStorageEntity);

    var _this = _possibleConstructorReturn(this, (ColumnHeadStorageEntity.__proto__ || Object.getPrototypeOf(ColumnHeadStorageEntity)).call(this, name, label, hidden, hiddeable));

    _this.options = [];
    return _this;
  }

  _createClass(ColumnHeadStorageEntity, [{
    key: 'getLabel',
    value: function getLabel() {
      return this.label || this.name;
    }
  }, {
    key: 'isHidden',
    value: function isHidden() {
      if (this.isFromStorage(_constants.COLUMN_STORAGE_HIDDEN)) {
        if (this.getStorage().hasKey(this.getKeyName(_constants.COLUMN_STORAGE_HIDDEN))) {
          return (0, _boolean2.default)(this.getStorage().getData(this.getKeyName(_constants.COLUMN_STORAGE_HIDDEN)));
        }
      }
      return this.hidden;
    }
  }, {
    key: 'isHideable',
    value: function isHideable() {
      if (this.isFromStorage(_constants.COLUMN_STORAGE_HIDEABLE)) {
        if (this.getStorage().hasKey(this.getKeyName(_constants.COLUMN_STORAGE_HIDEABLE))) {
          return (0, _boolean2.default)(this.getStorage().getData(this.getKeyName(_constants.COLUMN_STORAGE_HIDEABLE)));
        }
      }
      return this.hiddeable;
    }
  }, {
    key: 'getFieldName',
    value: function getFieldName() {
      return this.name;
    }
  }, {
    key: 'isActive',
    value: function isActive() {
      if (this.isFromStorage(_constants.COLUMN_STORAGE_ACTIVE)) {
        if (this.getStorage().hasKey(this.getKeyName(_constants.COLUMN_STORAGE_ACTIVE))) {
          return (0, _boolean2.default)(this.getStorage().getData(this.getKeyName(_constants.COLUMN_STORAGE_ACTIVE)));
        }
      }
      return this.active;
    }
  }, {
    key: 'isReverse',
    value: function isReverse() {
      if (this.isFromStorage(_constants.COLUMN_STORAGE_REVERSE)) {
        if (this.getStorage().hasKey(this.getKeyName(_constants.COLUMN_STORAGE_REVERSE))) {
          return (0, _boolean2.default)(this.getStorage().getData(this.getKeyName(_constants.COLUMN_STORAGE_REVERSE)));
        }
      }
      return this.reversed;
    }
  }, {
    key: 'needSort',
    value: function needSort() {
      if (this.isFromStorage(_constants.COLUMN_STORAGE_NEED_SORT)) {
        if (this.getStorage().hasKey(this.getKeyName(_constants.COLUMN_STORAGE_NEED_SORT))) {
          return (0, _boolean2.default)(this.getStorage().getData(this.getKeyName(_constants.COLUMN_STORAGE_NEED_SORT)));
        }
      }
      return this.needSord;
    }
  }, {
    key: 'setActive',
    value: function setActive(bool) {
      if (this.isFromStorage(_constants.COLUMN_STORAGE_ACTIVE)) {
        this.getStorage().setData(this.getKeyName(_constants.COLUMN_STORAGE_ACTIVE), bool);
      } else {
        _get(ColumnHeadStorageEntity.prototype.__proto__ || Object.getPrototypeOf(ColumnHeadStorageEntity.prototype), 'setActive', this).call(this, bool);
      }
      return this;
    }
  }, {
    key: 'setReverse',
    value: function setReverse(bool) {
      if (this.isFromStorage(_constants.COLUMN_STORAGE_REVERSE)) {
        this.getStorage().setData(this.getKeyName(_constants.COLUMN_STORAGE_REVERSE), bool);
      } else {
        _get(ColumnHeadStorageEntity.prototype.__proto__ || Object.getPrototypeOf(ColumnHeadStorageEntity.prototype), 'setReverse', this).call(this, bool);
      }
      return this;
    }
  }, {
    key: 'setHideable',
    value: function setHideable(value) {
      if (this.isFromStorage(_constants.COLUMN_STORAGE_HIDEABLE)) {
        this.getStorage().setData(this.getKeyName(_constants.COLUMN_STORAGE_HIDEABLE), value);
      } else {
        _get(ColumnHeadStorageEntity.prototype.__proto__ || Object.getPrototypeOf(ColumnHeadStorageEntity.prototype), 'setHideable', this).call(this, value);
      }
      return this;
    }
  }, {
    key: 'setHidden',
    value: function setHidden(value) {
      if (this.isFromStorage(_constants.COLUMN_STORAGE_HIDDEN)) {
        this.getStorage().setData(this.getKeyName(_constants.COLUMN_STORAGE_HIDDEN), value);
      } else {
        _get(ColumnHeadStorageEntity.prototype.__proto__ || Object.getPrototypeOf(ColumnHeadStorageEntity.prototype), 'setHidden', this).call(this, value);
      }
      return this;
    }
  }, {
    key: 'setNeedSort',
    value: function setNeedSort(value) {
      if (this.isFromStorage(_constants.COLUMN_STORAGE_NEED_SORT)) {
        this.getStorage().setData(this.getKeyName(_constants.COLUMN_STORAGE_NEED_SORT), value);
      } else {
        _get(ColumnHeadStorageEntity.prototype.__proto__ || Object.getPrototypeOf(ColumnHeadStorageEntity.prototype), 'setNeedSort', this).call(this, value);
      }
    }

    /**
     * @param type
     * @return {string}
     */

  }, {
    key: 'getKeyName',
    value: function getKeyName(type) {
      return this.tableName + '__' + this.getFieldName() + '__' + type;
    }
    /**
     * @protected
     * @param name
     * @return {boolean}
     */

  }, {
    key: 'isFromStorage',
    value: function isFromStorage(name) {
      return this.options.indexOf(name) !== -1;
    }

    /**
     * @param tableName {String}
     * @param options {String[]}
     * @param storage {StorageInterface}
     */

  }, {
    key: 'setStorage',
    value: function setStorage(tableName, options) {
      var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _StorageLocal2.default();

      this.tableName = tableName;
      this.options = options;
      this.storage = storage;
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
  }]);

  return ColumnHeadStorageEntity;
}(_ColumnHeadEntity3.default);

exports.default = ColumnHeadStorageEntity;