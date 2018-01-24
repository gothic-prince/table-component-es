'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataSelectorManagerInterface = require('./DataSelectorManagerInterface');

var _DataSelectorManagerInterface2 = _interopRequireDefault(_DataSelectorManagerInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataSelectorManager = function (_DataSelectorManagerI) {
  _inherits(DataSelectorManager, _DataSelectorManagerI);

  /**
   * @param table {RenderManagerInterface}
   */
  function DataSelectorManager(table) {
    _classCallCheck(this, DataSelectorManager);

    /**
     * @protected
     * @type {RenderManagerInterface}
     */
    var _this = _possibleConstructorReturn(this, (DataSelectorManager.__proto__ || Object.getPrototypeOf(DataSelectorManager)).call(this));

    _this.table = table;
    /**
     * @protected
     * @type {Array}
     */
    _this.entities = [];
    return _this;
  }
  /**
   * @param entity1
   * @param entity2
   * @return {boolean}
   */


  _createClass(DataSelectorManager, [{
    key: 'comparison',
    value: function comparison(entity1, entity2) {
      return entity1 === entity2;
    }

    /**
     * @protected
     */

  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.table.reRenderView();
    }
  }, {
    key: 'add',
    value: function add(entity) {
      if (this.isChosen(entity) === false) {
        this.entities.push(entity);
      } else {
        this.remove(entity);
      }
      this.handleChange();
    }

    /**
     * @protected
     * @param entity
     */

  }, {
    key: 'remove',
    value: function remove(entity) {
      this.entities = this.entities.filter(function (curEntity) {
        return curEntity !== entity;
      });
    }
  }, {
    key: 'set',
    value: function set(entities) {
      this.entities = entities;
      this.handleChange();
    }
  }, {
    key: 'get',
    value: function get() {
      return this.entities;
    }
  }, {
    key: 'isChosen',
    value: function isChosen(entity) {
      var _this2 = this;

      return this.entities.find(function (entity2) {
        return _this2.comparison(entity, entity2);
      }) !== undefined;
    }
  }]);

  return DataSelectorManager;
}(_DataSelectorManagerInterface2.default);

exports.default = DataSelectorManager;