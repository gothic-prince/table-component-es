import DataSelectorManager from '../../Models/DataSelectorManager/DataSelectorManager'
import DensityManager from '../../Models/DensityManager/DensityManager'
import PaginationManager from '../../Models/PaginationManager/PaginationManager'
import ResetManager from '../../Models/ResetManager/ResetManager'
import SortManager from '../../Models/SortManager/SortManager'
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
      new PaginationManager(this.getRenderManager())
    )
  }
  buildResetManager(type) {
    this.getFacade().setReset(
      new ResetManager(this.getRenderManager())
    )
  }
  buildSortManager(type) {
    this.getFacade().setSortManager(
      new SortManager(this.getRenderManager(), this.getColumnManager())
    )
  }
}
