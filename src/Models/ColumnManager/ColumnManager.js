import ColumnManagerInterface from './ColumnManagerInterface'
export default class ColumnManager extends ColumnManagerInterface {
  /**
   * @param table {RenderManagerInterface}
   * @param getBody {Function}
   * @param headers {ColumnHeadEntityInterface[]}
   */
  constructor(table, getBody, headers) {
    super()
    this._getBody = getBody
    this._headers = headers
    this._table = table

    headers.map((column) => {
      column.setColumnManager(this)
    })
  }

  /**
   * @param entity
   * @return {ColumnBodyEntityInterface[]}
   */
  createBodyColumns(entity) {
    return this._getBody(entity)
  }
  /**
   * @return {ColumnHeadEntityInterface[]}
   */
  getHeadColumns() {
    return this._headers
  }
  /**
   * @param column {ColumnBodyEntityInterface}
   * @param type {String}
   */
  handleChangeHeadColumn (column, type) {
    this._table.reRenderView()
  }
}