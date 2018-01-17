import TableFacadeAbstract from './TableFacadeAbstract';
export default class TableFacade extends TableFacadeAbstract {
  constructor() {
    super()
    /**
     * @private
     */
    this._sortManager = null
    /**
     * @private
     */
    this._chooseManager = null
    /**
     * @private
     */
    this._columnManager = null
    /**
     * @private
     */
    this._paginationManager = null
    /**
     * @private
     */
    this._densityManager = null
    /**
     * @private
     */
    this._resetManager = null
    /**
     * @private
     */
    this._renderManager = null
  }
  /**
   * @return {ColumnManagerInterface}
   */
  getColumnManager () {
    return this._columnManager
  }
  /**
   * @return {RenderManagerInterface}
   */
  getRenderManager () {
    return this._renderManager
  }
  /**
   * @return {PaginationManagerInterface}
   */
  getPaginationManager() {
    return this._paginationManager
  }
  /**
   * @return {DensityManagerInterface}
   */
  getDensityManager() {
    return this._densityManager
  }
  /**
   * @return {ResetManagerInterface}
   */
  getResetManager() {
    return this._resetManager
  }
  /**
   * @return {SortManagerInterface}
   */
  getSortManager () {
    return this._sortManager
  }
  /**
   * @return {DataSelectorManagerInterface}
   */
  getDataSelectorManager () {
    return this._chooseManager
  }

  /**
   * @param manager {ColumnManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setColumnManager (manager) {
    this._columnManager = manager
    return this
  }
  /**
   * @param manager {RenderManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setRenderManager (manager) {
    this._renderManager = manager
    return this
  }
  /**
   * @param manager {PaginationManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setPagination(manager) {
    this._paginationManager = manager
    return this
  }
  /**
   * @param manager {DensityManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setDensity(manager) {
    this._densityManager = manager
    return this
  }
  /**
   * @param manager {ResetManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setReset(manager) {
    this._resetManager = manager
    return this
  }
  /**
   * @param manager {SortManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setSortManager (manager) {
    this._sortManager = manager
    return this
  }
  /**
   * @param manager {DataSelectorManagerInterface}
   * @return {TableFacadeAbstract}
   */
  setDataSelectorManager (manager) {
    this._chooseManager = manager
    return this
  }
}