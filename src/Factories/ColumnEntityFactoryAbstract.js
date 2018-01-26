import ColumnEntityFactoryInterface from './ColumnEntityFactoryInterface';
export default class ColumnEntityFactoryAbstract extends ColumnEntityFactoryInterface {
  constructor(firstIsMain = true) {
    super()
    /**
     * @type {ColumnBodyEntityInterface[]}
     * @private
     */
    this._bodies = []

    /**
     * @type {ColumnHeadEntityInterface[]}
     * @private
     */
    this._headers = []

    /**
     * @type {boolean}
     * @private
     */
    this._firstIsMain = firstIsMain
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
  createHeadColumn (name, label, hideable, hidden, sortable) {
    throw new Error('Method "createHeadColumn" should be defined')
  }

  /**
   * @protected
   * @param name {String}
   * @param row
   * @param html
   * @return {ColumnBodyEntityInterface}
   */
  createBodyColumn (name, row, html) {
    throw new Error('Method "createBodyColumn" should be defined')
  }

  /**
   * @param name {String}
   * @param label {String}
   * @param hideable {Boolean}
   * @param hidden {Boolean}
   * @param sortable {Boolean}
   * @return {ColumnEntityFactoryInterface}
   */
  addHeader (name, label = null, hideable = true, hidden = false, sortable = true) {
    const isFirstMain = ((this._headers.length === 0) && (this._firstIsMain === true))
    this._headers.push(this.createHeadColumn(
      name,
      (label === null ? name : label),
      (isFirstMain === true ? false : hideable), //   hideable
      (isFirstMain === true ? false : hidden),   //  hidden
      sortable                                    //  sortable
    ))
    return this
  }

  /**
   * @param name {String}
   * @param row
   * @param html
   * @return {ColumnEntityFactoryInterface}
   */
  addBody (name, row, html = undefined) {
    this._bodies.push(this.createBodyColumn(
      name, row, html
    ))
    return this
  }

  /**
   * @return {ColumnBodyEntityInterface[]}
   */
  getBodies () {
    const bodies = [].concat(this._bodies)
    this._bodies = []
    return bodies
  }
  /**
   * @return {ColumnHeadEntityInterface[]}
   */
  getHeaders () {
    const heads = [].concat(this._headers)
    this._headers = []
    return heads
  }
}
