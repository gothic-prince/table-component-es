import TableInterface from './TableInterface';
export default class TableAbstract extends TableInterface {
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
   * @param entity
   * @return {ColumnBodyEntityInterface[]}
   */
  getBodyColumns(entity) {}
  /**
   * @return {ColumnHeadEntityInterface[]}
   */
  getHeadColumns() {}
  /**
   * @return {PaginationInterface}
   */
  getPagination() {}
  /**
   * @return {DensityInterface}
   */
  getDensity() {}
  /**
   * @return {ResetInterface}
   */
  getReset() {}
}