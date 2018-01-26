import DensityManagerInterface from './DensityManagerInterface'
import StorageInterface from 'storage-manager-es/dist/StorageInterface'
export default class DensityManagerWithStorage extends DensityManagerInterface {
  /**
   * @param table {RenderManagerInterface}
   * @param storage {StorageInterface}
   * @param tableName {String}
   * @param density {Number}
   */
  constructor(table, storage, tableName, density = 2) {
    super()
    this.table = table
    this.storage = storage
    this.tableName = tableName
    if (this.getStorage().hasKey(this.getKeyName()) === false) {
      this.getStorage().setData(this.getKeyName(), density)
    }
  }
  setDensity(density) {
    this.getStorage().setData(this.getKeyName(), density)
    this.table.reRenderView()
  }
  getDensity() {
    return Number(this.getStorage().getData(this.getKeyName()))
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
  getKeyName () {
    return this.tableName + '__density'
  }
}