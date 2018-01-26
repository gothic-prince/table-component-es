export default class ColumnManagerInterface {
  /**
   * @param entity
   * @return {ColumnBodyEntityInterface[]}
   */
  createBodyColumns(entity) {}
  /**
   * @return {ColumnHeadEntityInterface[]}
   */
  getHeadColumns() {}
  /**
   * @param column {ColumnHeadEntityInterface}
   * @param type {String}
   */
  handleChangeHeadColumn (column, type) {}
}
