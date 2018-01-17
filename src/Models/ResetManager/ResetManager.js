import ResetManagerInterface from './ResetManagerInterface'
export default class ResetManager extends ResetManagerInterface {
  /**
   * @param table {RenderManagerInterface}
   */
  constructor(table) {
    super()
    this.table = table
  }
  reload() {
    this.table.reRenderView()
  }
}