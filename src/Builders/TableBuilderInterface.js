export default class TableBuilderInterface {
  buildChooseManager(type) {
    throw new Error('Method "buildChooseManager" should be defined')
  }
  buildRenderManager(type) {
    throw new Error('Method "buildRenderManager" should be defined')
  }
  buildDensityManager(type) {
    throw new Error('Method "buildDensityManager" should be defined')
  }
  buildPaginationManager(type) {
    throw new Error('Method "buildPaginationManager" should be defined')
  }
  buildColumnManager(type) {
    throw new Error('Method "buildColumnManager" should be defined')
  }
  buildResetManager(type) {
    throw new Error('Method "buildResetManager" should be defined')
  }
  buildSortManager(type) {
    throw new Error('Method "buildSortManager" should be defined')
  }
  /**
   * @return {TableFacadeInterface}
   */
  createTableFacade () {
    throw new Error('Method "getTableFacade" should be defined')
  }
}
