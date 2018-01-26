import ColumnEntityFactoryAbstract from './ColumnEntityFactoryAbstract'
import ColumnHeadStorageEntity from '../Entities/HeadColumn/ColumnHeadStorageEntity'
import ColumnBodyEntity from '../Entities/BodyColumn/ColumnBodyEntity'
import StorageInterface from 'storage-manager-es/dist/StorageInterface'
import StorageLocal from 'storage-manager-es/dist/StorageLocal'
import {
  COLUMN_STORAGE_NEED_SORT,
  COLUMN_STORAGE_HIDDEN,
  COLUMN_STORAGE_HIDEABLE,
  COLUMN_STORAGE_REVERSE,
  COLUMN_STORAGE_ACTIVE,
} from '../Entities/HeadColumn/constants'

export const SORT = COLUMN_STORAGE_NEED_SORT
export const HIDDEN = COLUMN_STORAGE_HIDDEN
export const HIDEABLE = COLUMN_STORAGE_HIDEABLE
export const REVERSE = COLUMN_STORAGE_REVERSE
export const ACTIVE = COLUMN_STORAGE_ACTIVE

export default class ColumnEntityStorageFactory extends ColumnEntityFactoryAbstract {
  /**
   * @param tableName {String}
   * @param options {String[]}
   * @param storage {StorageInterface}
   * @param firstIsMain
   */
  constructor(tableName, options = [HIDDEN], storage = new StorageLocal(), firstIsMain = true) {
    super(firstIsMain)
    this._tableName = tableName
    this._options = options
    this._storage = storage
  }
  /**
   * @protected
   * @param name {String}
   * @param label {String}
   * @param hideable {Boolean}
   * @param hidden {Boolean}
   * @param sortable {Boolean}
   * @return {ColumnHeadEntityInterface}
   */
  createHeadColumn (name, label, hideable, hidden, sortable) {
    const column = new ColumnHeadStorageEntity(name, label, hidden, hideable)
    column.setNeedSort(sortable)
    column.setStorage(this._tableName, this._options, this._storage)
    return column
  }

  /**
   * @protected
   * @param name {String}
   * @param row
   * @param html
   * @return {ColumnBodyEntityInterface}
   */
  createBodyColumn (name, row, html) {
    return new ColumnBodyEntity(name, row, html)
  }
}
