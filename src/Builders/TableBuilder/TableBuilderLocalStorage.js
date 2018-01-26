import {TABLE_BUILD_STORAGE, TABLE_BUILD_DEFAULT} from '../TableBuilder/constants'
import StorageInterface from 'storage-manager-es/dist/StorageInterface'
import StorageLocal from 'storage-manager-es/dist/StorageLocal'
import TableBuilder from './TableBuilder';
import DensityManagerWithStorage from '../../Models/DensityManager/DensityManagerWithStorage';
export default class TableBuilderLocalStorage  extends TableBuilder {
  /**
   * @param onRender {Function}
   * @param columnManager {ColumnManagerInterface}
   * @param tableName {String}
   * @param storage {StorageInterface}
   */
  constructor(onRender, columnManager, tableName, storage = new StorageLocal()) {
    super(onRender, columnManager)
    this.tableName = tableName
    this.storage = storage
  }
  /**
   * @protected
   * @return {StorageInterface}
   */
  getStorage () {
    return this.storage
  }
  /**
   * @protected
   * @return {string}
   */
  getTableName () {
    return this.tableName
  }
  buildDensityManager(type) {
    switch (type) {
      case TABLE_BUILD_STORAGE:
        this.getFacade().setDensity(
          new DensityManagerWithStorage(this.getRenderManager(), this.getStorage(), this.getTableName())
        )
        break
      default:
        super.buildDensityManager(TABLE_BUILD_DEFAULT)
        break
    }
  }
}
