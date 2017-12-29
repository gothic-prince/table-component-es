/**
 * @template {T}
 */
export default class TableFacadeInterface {
  /**
   * @param entities {T[]}
   * @return {T[]}
   */
  getEntities(entities) {
    throw new Error('Method "getEntities" should be defined')
  }
  /**
   * @return {ColumnManagerInterface}
   */
  getColumnManager () {
    throw new Error('Method "getColumnManager" should be defined')
  }
  /**
   * @return {RenderInterface}
   */
  getRenderManager () {
    throw new Error('Method "getRenderManager" should be defined')
  }
}