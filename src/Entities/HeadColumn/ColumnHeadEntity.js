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
    return this
  }
  isHideable() {
    return this.hiddeable
  }
  setHideable(value) {
    this.hiddeable = value
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
    return this
  }
  isReverse () {
    return this.reversed
  }
  setReverse(bool){
    this.reversed = bool
    return this
  }
  needSort(){
    return this.needSord
  }
}
