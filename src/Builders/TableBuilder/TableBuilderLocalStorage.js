import {TABLE_BUILD_STORAGE, TABLE_BUILD_DEFAULT} from '../TableBuilder/constants'
import StorageInterface from 'storage-manager-es/dist/StorageInterface'
import StorageLocal from 'storage-manager-es/dist/StorageLocal'
import TableBuilder from './TableBuilder';
import DensityManagerWithStorage from '../../Models/DensityManager/DensityManagerWithStorage'
import ColumnEntityStorageFactory from '../../Factories/ColumnEntityStorageFactory'
import {
  COLUMN_STORAGE_HIDDEN
} from '../../Entities/HeadColumn/constants'
export default class TableBuilderLocalStorage  extends TableBuilder {
  /**
   * @param onRender {Function}
   * @param tableName {String}
   * @param storage {StorageInterface}
   */
  constructor(onRender, tableName, storage = new StorageLocal()) {
    super(onRender)
    this.tableName = tableName
    this.storage = storage
  }
  /**
   * @protected
   * @return {String[]}
   */
  getOptions () {
    return [COLUMN_STORAGE_HIDDEN]
  }
  /**
   * @return {ColumnEntityFactoryInterface}
   */
  getFactory () {
    if (this._factory === null) {
      this._factory = new ColumnEntityStorageFactory(
        this.getTableName(),
        this.getOptions(),
        this.getStorage()
      )
    }
    return this._factory
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
