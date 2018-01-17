import DataSelectorManager from '../../Models/DataSelectorManager/DataSelectorManager'
import DensityManager from '../../Models/DensityManager/DensityManager'
import Pagination from '../../Models/PaginationManager/PaginationManager'
import Reset from '../../Models/ResetManager/ResetManager'
import Sort from '../../Models/SortManager/SortManager'
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
    this.getFacade().setDataSelectorManager(
      new DataSelectorManager(this.getRenderManager())
    )
  }
  buildDensityManager(type) {
    this.getFacade().setDensity(
      new DensityManager(this.getRenderManager())
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
