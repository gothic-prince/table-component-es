export default class ColumnEntityFactoryInterface {
  /**
   * @param name {String}
   * @param label {String}
   * @param hideable {Boolean}
   * @param hidden {Boolean}
   * @param sortable {Boolean}
   * @return {ColumnEntityFactoryInterface}
   */
  addHeader (name, label = null, hideable = true, hidden = false, sortable = true) {}

  /**
   * @param name {String}
   * @param row
   * @param html
   * @return {ColumnEntityFactoryInterface}
   */
  addBody (name, row, html = undefined) {}

  /**
   * @return {ColumnBodyEntityInterface[]}
   */
  getBodies () {}
  /**
   * @return {ColumnHeadEntityInterface[]}
   */
  getHeaders () {}
}
