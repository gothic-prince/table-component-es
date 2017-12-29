import TableInterface from './TableFacadeInterface';

export default class TableFacadeAbstract extends TableInterface {
  /**
   * @param entities {T[]}
   * @return {T[]}
   */
  getEntities(entities) {
    return this.getPaginationManager().getEntities(
      this.getSortManager().getEntities(entities)
    )
  }
  /**
   * @return {ColumnManagerInterface}
   */
  getColumnManager () {
    throw new Error('Method "getColumnManager" should be defined')
  }
  /**
   * @return {RenderInterface}
   */
  getRenderManager () {
    throw new Error('Method "getRenderManager" should be defined')
  }
  /**
   * @return {PaginationInterface}
   */
  getPaginationManager() {
    throw new Error('Method "getPaginationManager" should be defined')
  }
  /**
   * @return {DensityInterface}
   */
  getDensityManager() {
    throw new Error('Method "getDensityManager" should be defined')
  }
  /**
   * @return {ResetInterface}
   */
  getResetManager() {
    throw new Error('Method "getResetManager" should be defined')
  }
  /**
   * @return {SortInterface}
   */
  getSortManager () {
    throw new Error('Method "getSortManager" should be defined')
  }
  /**
   * @return {ChosenInterface}
   */
  getChooseManager () {
    throw new Error('Method "getChooseManager" should be defined')
  }
}