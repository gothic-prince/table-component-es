import ResetInterface from './ResetInterface';
export default class Reset extends ResetInterface {
  /**
   * @param table {RenderInterface}
   * @param handle {Function}
   */
  constructor(table, handle = null) {
    super()
    this.table = table
    this.handle = handle
  }
  reload() {
    if (this.handle !== null) {
      this.handle()
    }
    this.table.reRenderView()
  }
}