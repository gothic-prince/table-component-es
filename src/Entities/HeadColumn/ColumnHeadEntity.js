import ColumnHeadEntityInterface from './ColumnHeadEntityInterface';
import ParameterShouldBeDefinedException from '../../Exceptions/ParameterShouldBeDefinedException';
export default class ColumnHeadEntity extends ColumnHeadEntityInterface {
  constructor(name, label, hidden = false, hiddeable = true) {
    super()
    if (name === undefined) {
      throw new ParameterShouldBeDefinedException(1)
    }
    /**
     * @protected
     * @type {ColumnManagerInterface}
     */
    this.columnManager = null
    /**
     * @protected
     */
    this.name = name
    /**
     * @protected
     */
    this.label = label
    /**
     * @protected
     */
    this.hidden = hidden
    /**
     * @protected
     */
    this.hiddeable = hiddeable

    /**
     * @protected
     */
    this.active = false
    /**
     * @protected
     */
    this.reversed = false
    /**
     * @protected
     */
    this.needSord = true
  }

  getLabel () {
    return this.label || this.name
  }
  isHidden() {
    return this.hidden
  }
  setHidden(value) {
    this.hidden = value
    this.handelChange('hidden')
    return this
  }
  isHideable() {
    return this.hiddeable
  }
  setHideable(value) {
    this.hiddeable = value
    this.handelChange('hideable')
    return this
  }

  getFieldName () {
    return this.name
  }
  isActive () {
    return this.active
  }
  setActive (bool) {
    this.active = bool
    this.handelChange('active')
    return this
  }
  isReverse () {
    return this.reversed
  }
  setReverse(bool){
    this.reversed = bool
    this.handelChange('revers')
    return this
  }
  needSort(){
    return this.needSord
  }
  setNeedSort(value){
    this.needSord = value
    this.handelChange('need_sort')
  }

  /**
   * @param columnManager {ColumnManagerInterface}
   * @return {ColumnHeadEntity}
   */
  setColumnManager (columnManager) {
    this.columnManager = columnManager
    return this
  }
  /**
   * @protected
   * @param type
   */
  handelChange (type) {
    if (this.columnManager !== null) {
      this.columnManager.handleChangeHeadColumn(this, type)
    }
  }
}
