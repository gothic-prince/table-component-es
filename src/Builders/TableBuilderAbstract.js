import TableBuilderInterface from './TableBuilderInterface'
import TableFacade from '../Facades/TableFacade'
import Chosen from '../Models/Chosen/Chosen'
import Density from '../Models/Density/Density'
import Pagination from '../Models/Pagination/Pagination'
import Reset from '../Models/Reset/Reset'
import Sort from '../Models/Sort/Sort'
import RenderManager from '../Models/Render/RenderManager'

export default class TableBuilderAbstract extends TableBuilderInterface {
  /**
   * @param onRender {Function}
   * @param columnManager {ColumnManagerInterface}
   */
  constructor(onRender, columnManager) {
    super()

    const render = new RenderManager(onRender)

    /**
     * @private
     */
    this._columnManager = columnManager
    /**
     * @private
     */
    this._sortManager = new Sort(render, columnManager)
    /**
     * @private
     */
    this._chooseManager = new Chosen(render)
    /**
     * @private
     */
    this._paginationManager = new Pagination(render)
    /**
     * @private
     */
    this._densityManager = new Density(render)
    /**
     * @private
     */
    this._resetManager = new Reset(render)
    /**
     * @private
     */
    this._renderManager = render
    /**
     * @private
     */
    this._facade = new TableFacade()
  }
  /**
   * @return {TableFacadeAbstract}
   */
  createTableFacade () {
    const facade = this._facade
    facade.setChooseManager(this._chooseManager )
    facade.setRenderManager(this._renderManager)
    facade.setDensity(this._densityManager)
    facade.setPagination(this._paginationManager)
    facade.setColumnManager(this._columnManager)
    facade.setReset(this._resetManager)
    facade.setSortManager(this._sortManager)
  }
}
