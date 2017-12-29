export default class TableInterface {
  /**
   * @param entity
   * @param entity2
   * @return {Boolean}
   */
  check(entity, entity2) {}
  /**
   * @return {SortInterface}
   */
  getSorter () {}
  /**
   * @return {ChosenInterface}
   */
  getChooser () {}
  getEntities(entities) {}
  getTableName() {}
  /**
   * @return {ColumnManagerInterface}
   */
  getColumnManager () {}
}