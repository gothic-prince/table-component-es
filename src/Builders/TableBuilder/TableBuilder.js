import DataSelectorManager from '../../Models/DataSelectorManager/DataSelectorManager'
import DensityManager from '../../Models/DensityManager/DensityManager'
import PaginationManager from '../../Models/PaginationManager/PaginationManager'
import ResetManager from '../../Models/ResetManager/ResetManager'
import SortManager from '../../Models/SortManager/SortManager'
import TableBuilderAbstract from './TableBuilderAbstract'
import {TABLE_BUILD_DEFAULT} from '../../Builders/TableBuilder/constants'

export default class TableBuilder extends TableBuilderAbstract {
  /**
   * @param onRender {Function}
   * @param columnManager {ColumnManagerInterface}
   */
  constructor(onRender, columnManager) {
    super(onRender)
    this.setColumnManager(columnManager)
  }
  buildChooseManager(type) {
    if (type === TABLE_BUILD_DEFAULT) {
      this.getFacade().setDataSelectorManager(
        new DataSelectorManager(this.getRenderManager())
      )
    }
  }
  buildDensityManager(type) {
    if (type === TABLE_BUILD_DEFAULT) {
      this.getFacade().setDensity(
        new DensityManager(this.getRenderManager())
      )
    }
  }
  buildPaginationManager(type) {
    if (type === TABLE_BUILD_DEFAULT) {
      this.getFacade().setPagination(
        new PaginationManager(this.getRenderManager())
      )
    }
  }
  buildResetManager(type) {
    if (type === TABLE_BUILD_DEFAULT) {
      this.getFacade().setReset(
        new ResetManager(this.getRenderManager())
      )
    }
  }
  buildSortManager(type) {
    if (type === TABLE_BUILD_DEFAULT) {
      this.getFacade().setSortManager(
        new SortManager(this.getRenderManager(), this.getColumnManager())
      )
    }
  }
}
