import TableBuilderInterface from './TableBuilderInterface'
import TableFacade from '../../Facades/TableFacade'
import RenderManager from '../../Models/RenderManager/RenderManager'
import {TABLE_BUILD_DEFAULT} from './constants';

export default class TableBuilderAbstract extends TableBuilderInterface {
  /**
   * @param onRender {Function}
   * @param columnManager {ColumnManagerInterface}
   */
  constructor(onRender, columnManager) {
    super()
    /**
     * @protected
     */
    this._columnManager = columnManager
    /**
     * @protected
     */
    this._renderManager = new RenderManager(onRender)
    /**
     * @protected
     */
    this._facade = this.createFacade()
    this.buildSortManager(TABLE_BUILD_DEFAULT)
    this.buildResetManager(TABLE_BUILD_DEFAULT)
    this.buildPaginationManager(TABLE_BUILD_DEFAULT)
    this.buildDensityManager(TABLE_BUILD_DEFAULT)
    this.buildChooseManager(TABLE_BUILD_DEFAULT)
  }
  /**
   * @return {TableFacadeAbstract}
   */
  getTableFacade () {
    return this.getFacade()
  }
  /**
   * @protected
   * @return {TableFacade}
   */
  createFacade () {
    const facade = new TableFacade()
    facade.setRenderManager(this.getRenderManager())
    facade.setColumnManager(this.getColumnManager())
    return facade
  }
  /**
   * @protected
   * @return {TableFacade}
   */
  getFacade () {
    return this._facade
  }
  /**
   * @protected
   * @return {RenderManagerInterface}
   */
  getRenderManager () {
    return this._renderManager
  }
  /**
   * @protected
   * @return {ColumnManagerInterface}
   */
  getColumnManager () {
    return this._columnManager
  }
}
