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
}