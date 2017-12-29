import ColumnManagerInterface from './ColumnManagerInterface';
export default class ColumnManager extends ColumnManagerInterface {
  /**
   * @param getBody {Function<Object>}
   * @param headers {ColumnHeadEntityInterface[]}
   */
  constructor(getBody, headers) {
    super()
    this._getBody = getBody
    this._headers = headers
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
}