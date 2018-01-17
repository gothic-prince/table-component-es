import PaginationManagerInterface from './PaginationManagerInterface'
export default class PaginationManager extends PaginationManagerInterface {
  /**
   * @param table {RenderManagerInterface}
   */
  constructor (table) {
    super()
    /**
     * @type {RenderManagerInterface}
     * @private
     */
    this._table = table
    /**
     * @type {Number}
     * @private
     */
    this._page = 1
    /**
     * @type {Number}
     * @private
     */
    this._limitRows = 10
    /**
     * @type {Number[]}
     * @private
     */
    this._limitRowsArray = [10, 25, 50, 100]
  }
  handleChange () {
    this._table.reRenderView()
  }
  first (entities) {
    this.setCurrentPage(1)
  }
  prev(entities){
    const newPage = this._page - 1
    if (this.hasPrev(entities)) {
      this.setCurrentPage(newPage)
    }
  }
  next(entities){
    const newPage = this._page + 1
    if (this.hasNext(entities)) {
      this.setCurrentPage(newPage)
    }
  }
  latest(entities) {
    this.setCurrentPage(this.getLatestPage(entities))
  }
  setCurrentPage(pageNumber) {
    this._page = pageNumber
    this.handleChange()
  }
  getCurrentPage() {
    return this._page
  }
  hasPrev(entities){
    return ((this._page - 1) >= 1)
  }
  hasNext(entities){
    return ((this._page + 1) <= this.getLatestPage(entities))
  }
  getLimitRows () {
    return this._limitRows
  }
  setLimitRows (max) {
    this._limitRows = max
    this.handleChange()
  }
  getArrayLimitRows () {
    return this._limitRowsArray
  }
  setArrayLimitRows (numbers) {
    this._limitRowsArray = numbers
    this.handleChange()
  }
  getCutEntities(entities) {
    const endIndex = (this.getCurrentPage() * this.getLimitRows())
    const startIndex = endIndex - this.getLimitRows()
    return entities.slice(startIndex, endIndex)
  }
  getLatestPage(entities) {
    return Math.ceil(entities.length / this.getLimitRows())
  }
}
