import SortManagerInterface from './SortManagerInterface'
import {TABLE_SORT_DESC} from './constants'
export default class SortManager extends SortManagerInterface {
  /**
   * @param render {RenderManagerInterface}
   * @param columnManager {ColumnManagerInterface}
   */
  constructor(render, columnManager) {
    super()
    /**
     * @type {RenderManagerInterface}
     * @private
     */
    this._render = render
    /**
     * @type {ColumnManagerInterface}
     * @private
     */
    this._columnManager = columnManager
    /**
     * @type {string}
     * @private
     */
    this._field = ''
  }

  /**
   * @protected
   */
  handleChange () {
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

  /**
   * @protected
   * @param column {ColumnHeadEntityInterface}
   * @param forceReverse
   * @return {Boolean}
   */
  isRevers (column, forceReverse) {
    if (forceReverse !== null) {
      return forceReverse
    }
    if (column.getFieldName() === this._field) {
      return !column.isReverse()
    }
    return TABLE_SORT_DESC
  }
  by(field, reverse = null) {
    this.getColumnManager().getHeadColumns().map((entity) => {
      if (entity.getFieldName() === field) {
        entity.setReverse(this.isRevers(entity, reverse))
        entity.setActive(true)
        this._field = field
      } else {
        entity.setActive(false)
      }
      return entity
    })
    this.handleChange()
  }
}