import TableBuilderInterface from './TableBuilderInterface'
import TableFacade from '../Facades/TableFacade'
import Chosen from '../Models/Chosen/Chosen'
import Density from '../Models/Density/Density'
import Pagination from '../Models/Pagination/Pagination'
import Reset from '../Models/Reset/Reset'
import Sort from '../Models/Sort/Sort'
import TableBuilderAbstract from './TableBuilderAbstract'

export default class TableBuilder extends TableBuilderAbstract {
  /**
   * @param onRender {Function}
   * @param columnManager {ColumnManagerInterface}
   */
  constructor(onRender, columnManager) {
    super(onRender, columnManager)
  }
  buildChooseManager(type) {
    this.getFacade().setChooseManager(
      new Chosen(this.getRenderManager())
    )
  }
  buildDensityManager(type) {
    this.getFacade().setDensity(
      new Density(this.getRenderManager())
    )
  }
  buildPaginationManager(type) {
    this.getFacade().setPagination(
      new Pagination(this.getRenderManager())
    )
  }
  buildResetManager(type) {
    this.getFacade().setReset(
      new Reset(this.getRenderManager())
    )
  }
  buildSortManager(type) {
    this.getFacade().setSortManager(
      new Sort(this.getRenderManager(), this.getColumnManager())
    )
  }
}
