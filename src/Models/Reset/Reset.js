import ResetInterface from './ResetInterface';
export default class Reset extends ResetInterface {
  /**
   * @param table {RenderInterface}
   */
  constructor(table) {
    super()
    this.table = table
  }
  reload() {
    this.table.reRenderView()
  }
}