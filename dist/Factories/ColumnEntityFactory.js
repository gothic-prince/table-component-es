'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ColumnEntityFactoryAbstract = require('./ColumnEntityFactoryAbstract');

var _ColumnEntityFactoryAbstract2 = _interopRequireDefault(_ColumnEntityFactoryAbstract);

var _ColumnHeadEntity = require('../Entities/HeadColumn/ColumnHeadEntity');

var _ColumnHeadEntity2 = _interopRequireDefault(_ColumnHeadEntity);

var _ColumnBodyEntity = require('../Entities/BodyColumn/ColumnBodyEntity');

var _ColumnBodyEntity2 = _interopRequireDefault(_ColumnBodyEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnEntityFactory = function (_ColumnEntityFactoryA) {
  _inherits(ColumnEntityFactory, _ColumnEntityFactoryA);

  function ColumnEntityFactory() {
    var firstIsMain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, ColumnEntityFactory);

    return _possibleConstructorReturn(this, (ColumnEntityFactory.__proto__ || Object.getPrototypeOf(ColumnEntityFactory)).call(this, firstIsMain));
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


  _createClass(ColumnEntityFactory, [{
    key: 'createHeadColumn',
    value: function createHeadColumn(name, label, hideable, hidden, sortable) {
      var column = new _ColumnHeadEntity2.default(name, label, hidden, hideable);
      column.setNeedSort(sortable);
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

  return ColumnEntityFactory;
}(_ColumnEntityFactoryAbstract2.default);

exports.default = ColumnEntityFactory;