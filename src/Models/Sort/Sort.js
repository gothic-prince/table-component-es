import SortInterface from './SortInterface';
export default class Sort extends SortInterface {
  /**
   * @param render {RenderInterface}
   * @param columnManager {ColumnManagerInterface}
   * @param handle {Function}
   */
  constructor(render, columnManager, handle = null) {
    super()
    /**
     * @type {RenderInterface}
     * @private
     */
    this._render = render
    /**
     * @type {ColumnManagerInterface}
     * @private
     */
    this._columnManager = columnManager
    /**
     * @type {Function}
     * @private
     */
    this._handle = handle
  }

  /**
   * @protected
   */
  handleChange () {
    if (this._handle !== null) {
      this._handle()
    }
    this._render.reRenderView()
  }

  /**
   * @protected
   * @return {ColumnManagerInterface}
   */
  getColumnManager () {
    return this._columnManager
  }
  /**
   * @protected
   * @return {ColumnHeadEntityInterface|null}
   */
  getActiveHead () {
    return this.getColumnManager().getHeadColumns().find((column) => {
      return column.isActive() === true
    }) || null
  }
  getSortedEntities (entities) {
    const header = this.getActiveHead() || null

    if (header === null || header.needSort() === false) {
      return entities
    }
    return entities.sort((entity1, entity2) => {
      /**
       * @param column {ColumnBodyEntityInterface}
       */
      const findColumnByName = (column) => {
        return column.getName() === header.getFieldName()
      }
      const column1 = (
        this.getColumnManager()
          .createBodyColumns(entity1)
          .find(findColumnByName)
      )
      const column2 = (
        this.getColumnManager()
          .createBodyColumns(entity2)
          .find(findColumnByName)
      )
      const value1 = column1.getRawValue()
      const value2 = column2.getRawValue()
      if ((value1 === undefined) || (value2 === undefined)) {
        return 0;
      }
      if(value1 < value2) return (header.isReverse() ? 1 : -1);
      if(value1 > value2) return (header.isReverse() ? -1 : 1);
      return 0;
    })
  }
  by(field, reverse = null) {
    this.getColumnManager().getHeadColumns().map((entity) => {
      if (entity.getFieldName() === field) {
        entity.setReverse(reverse === null ? !entity.isReverse() : reverse)
        entity.setActive(true)
      } else {
        entity.setActive(false)
      }
      return entity
    })
    this.handleChange()
  }
}