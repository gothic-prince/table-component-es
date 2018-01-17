import TableFacadeInterface from './TableFacadeInterface';

export default class TableFacadeAbstract extends TableFacadeInterface {
  /**
   * @param entities {T[]}
   * @return {T[]}
   */
  getEntities(entities) {
    return this.getPaginationManager().getCutEntities(
      this.getSortManager().getSortedEntities(entities)
    )
  }
  /**
   * @return {ColumnManagerInterface}
   */
  getColumnManager () {
    throw new Error('Method "getColumnManager" should be defined')
  }
  /**
   * @return {RenderManagerInterface}
   */
  getRenderManager () {
    throw new Error('Method "getRenderManager" should be defined')
  }
  /**
   * @return {PaginationManagerInterface}
   */
  getPaginationManager() {
    throw new Error('Method "getPaginationManager" should be defined')
  }
  /**
   * @return {DensityManagerInterface}
   */
  getDensityManager() {
    throw new Error('Method "getDensityManager" should be defined')
  }
  /**
   * @return {ResetManagerInterface}
   */
  getResetManager() {
    throw new Error('Method "getResetManager" should be defined')
  }
  /**
   * @return {SortManagerInterface}
   */
  getSortManager () {
    throw new Error('Method "getSortManager" should be defined')
  }
  /**
   * @return {DataSelectorManagerInterface}
   */
  getDataSelectorManager () {
    throw new Error('Method "getDataSelectorManager" should be defined')
  }

  /**
   * @param manager {ColumnManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setColumnManager (manager) {
    throw new Error('Method "setColumnManager" should be defined')
  }
  /**
   * @param manager {RenderManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setRenderManager (manager) {
    throw new Error('Method "setRenderManager" should be defined')
  }
  /**
   * @param manager {PaginationManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setPagination(manager) {
    throw new Error('Method "setPagination" should be defined')
  }
  /**
   * @param manager {DensityManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setDensity(manager) {
    throw new Error('Method "setDensity" should be defined')
  }
  /**
   * @param manager {ResetManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setReset(manager) {
    throw new Error('Method "setReset" should be defined')
  }
  /**
   * @param manager {SortManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setSortManager (manager) {
    throw new Error('Method "setSortManager" should be defined')
  }
  /**
   * @param manager {DataSelectorManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setDataSelectorManager (manager) {
    throw new Error('Method "setChooseManager" should be defined')
  }
}