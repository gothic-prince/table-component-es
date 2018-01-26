import StorageLocal from 'storage-manager-es/dist/StorageLocal'
import StorageInterface from 'storage-manager-es/dist/StorageInterface'
import ColumnHeadEntity from './ColumnHeadEntity';
import {
  COLUMN_STORAGE_ACTIVE as ACTIVE,
  COLUMN_STORAGE_HIDDEN as HIDDEN,
  COLUMN_STORAGE_HIDEABLE as HIDEABLE,
  COLUMN_STORAGE_NEED_SORT as SORT,
  COLUMN_STORAGE_REVERSE as REVERSE
} from './constants';
export default class ColumnHeadStorageEntity extends ColumnHeadEntity {
  constructor(name, label, hidden = false, hiddeable = true) {
    super(name, label, hidden, hiddeable)
    this.options = []
  }
  getLabel () {
    return this.label || this.name
  }
  isHidden() {
    if (this.isFromStorage(HIDDEN)) {
      if (this.getStorage().hasKey(this.getKeyName(HIDDEN))) {
        return this.getStorage().getData(this.getKeyName(HIDDEN))
      }
    }
    return this.hidden
  }
  isHideable() {
    if (this.isFromStorage(HIDEABLE)) {
      if (this.getStorage().hasKey(this.getKeyName(HIDEABLE))) {
        return this.getStorage().getData(this.getKeyName(HIDEABLE))
      }
    }
    return this.hiddeable
  }
  getFieldName () {
    return this.name
  }
  isActive () {
    if (this.isFromStorage(ACTIVE)) {
      if (this.getStorage().hasKey(this.getKeyName(ACTIVE))) {
        return this.getStorage().getData(this.getKeyName(ACTIVE))
      }
    }
    return this.active
  }
  isReverse () {
    if (this.isFromStorage(REVERSE)) {
      if (this.getStorage().hasKey(this.getKeyName(REVERSE))) {
        return this.getStorage().getData(this.getKeyName(REVERSE))
      }

    }
    return this.reversed
  }
  needSort(){
    if (this.isFromStorage(SORT)) {
      if (this.getStorage().hasKey(this.getKeyName(SORT))) {
        return this.getStorage().getData(this.getKeyName(SORT))
      }
    }
    return this.needSord
  }

  setActive (bool) {
    if (this.isFromStorage(ACTIVE)) {
      this.getStorage().setData(this.getKeyName(ACTIVE), bool)
    } else {
      super.setActive(bool)
    }
    return this
  }
  setReverse(bool){
    if (this.isFromStorage(REVERSE)) {
      this.getStorage().setData(this.getKeyName(REVERSE), bool)
    } else {
      super.setReverse(bool)
    }
    return this
  }
  setHideable(value) {
    if (this.isFromStorage(HIDEABLE)) {
      this.getStorage().setData(this.getKeyName(HIDEABLE), value)
    } else {
      super.setHideable(value)
    }
    return this
  }
  setHidden(value) {
    if (this.isFromStorage(HIDDEN)) {
      this.getStorage().setData(this.getKeyName(HIDDEN), value)
    } else {
      super.setHidden(value)
    }
    return this
  }
  setNeedSort(value){
    if (this.isFromStorage(SORT)) {
      this.getStorage().setData(this.getKeyName(SORT), value)
    } else {
      super.setNeedSort(value)
    }
  }

  /**
   * @param type
   * @return {string}
   */
  getKeyName (type) {
    return `${this.tableName}__${this.getFieldName()}__${type}`
  }
  /**
   * @protected
   * @param name
   * @return {boolean}
   */
  isFromStorage (name) {
    return this.options.indexOf(name) !== -1
  }

  /**
   * @param tableName {String}
   * @param options {String[]}
   * @param storage {StorageInterface}
   */
  setStorage (tableName, options, storage = new StorageLocal()) {
    this.tableName = tableName
    this.options = options
    this.storage = storage
  }
  /**
   * @protected
   * @return {StorageInterface}
   */
  getStorage () {
    return this.storage
  }
}
