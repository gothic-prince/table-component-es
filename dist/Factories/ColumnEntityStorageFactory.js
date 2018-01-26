'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTIVE = exports.REVERSE = exports.HIDEABLE = exports.HIDDEN = exports.SORT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ColumnEntityFactoryAbstract = require('./ColumnEntityFactoryAbstract');

var _ColumnEntityFactoryAbstract2 = _interopRequireDefault(_ColumnEntityFactoryAbstract);

var _ColumnHeadStorageEntity = require('../Entities/HeadColumn/ColumnHeadStorageEntity');

var _ColumnHeadStorageEntity2 = _interopRequireDefault(_ColumnHeadStorageEntity);

var _ColumnBodyEntity = require('../Entities/BodyColumn/ColumnBodyEntity');

var _ColumnBodyEntity2 = _interopRequireDefault(_ColumnBodyEntity);

var _StorageInterface = require('storage-manager-es/dist/StorageInterface');

var _StorageInterface2 = _interopRequireDefault(_StorageInterface);

var _StorageLocal = require('storage-manager-es/dist/StorageLocal');

var _StorageLocal2 = _interopRequireDefault(_StorageLocal);

var _constants = require('../Entities/HeadColumn/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SORT = exports.SORT = _constants.COLUMN_STORAGE_NEED_SORT;
var HIDDEN = exports.HIDDEN = _constants.COLUMN_STORAGE_HIDDEN;
var HIDEABLE = exports.HIDEABLE = _constants.COLUMN_STORAGE_HIDEABLE;
var REVERSE = exports.REVERSE = _constants.COLUMN_STORAGE_REVERSE;
var ACTIVE = exports.ACTIVE = _constants.COLUMN_STORAGE_ACTIVE;

var ColumnEntityStorageFactory = function (_ColumnEntityFactoryA) {
  _inherits(ColumnEntityStorageFactory, _ColumnEntityFactoryA);

  /**
   * @param tableName {String}
   * @param options {String[]}
   * @param storage {StorageInterface}
   * @param firstIsMain
   */
  function ColumnEntityStorageFactory(tableName) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [HIDDEN];
    var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _StorageLocal2.default();
    var firstIsMain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, ColumnEntityStorageFactory);

    var _this = _possibleConstructorReturn(this, (ColumnEntityStorageFactory.__proto__ || Object.getPrototypeOf(ColumnEntityStorageFactory)).call(this, firstIsMain));

    _this._tableName = tableName;
    _this._options = options;
    _this._storage = storage;
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


  _createClass(ColumnEntityStorageFactory, [{
    key: 'createHeadColumn',
    value: function createHeadColumn(name, label, hideable, hidden, sortable) {
      var column = new _ColumnHeadStorageEntity2.default(name, label, hidden, hideable);
      column.setNeedSort(sortable);
      column.setStorage(this._tableName, this._options, this._storage);
      return column;
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
      return new _ColumnBodyEntity2.default(name, row, html);
    }
  }]);

  return ColumnEntityStorageFactory;
}(_ColumnEntityFactoryAbstract2.default);

exports.default = ColumnEntityStorageFactory;