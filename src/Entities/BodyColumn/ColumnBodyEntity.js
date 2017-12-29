import ColumnBodyEntityInterface from './ColumnBodyEntityInterface';
import ParameterShouldBeDefinedException from '../../Exceptions/ParameterShouldBeDefinedException';
export default class ColumnBodyEntity extends ColumnBodyEntityInterface {
  /**
   * @param name {String}
   * @param row
   * @param html {String|Number}
   */
  constructor(name, row, html) {
    super()
    if (name === undefined) {
      throw new ParameterShouldBeDefinedException(1)
    }
    if (row === undefined) {
      throw new ParameterShouldBeDefinedException(2)
    }
    /**
     * @protected
     */
    this.name = name
    /**
     * @protected
     */
    this.row = row
    /**
     * @protected
     */
    this.html = html || row
  }
  getName() {
    return this.name
  }
  getRawValue() {
    return this.row
  }
  getHtmlValue() {
    return this.html
  }
}