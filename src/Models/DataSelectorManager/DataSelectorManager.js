import DataSelectorManagerInterface from './DataSelectorManagerInterface'
export default class DataSelectorManager extends DataSelectorManagerInterface {
  /**
   * @param table {RenderManagerInterface}
   */
  constructor(table) {
    super()
    /**
     * @protected
     * @type {RenderManagerInterface}
     */
    this.table = table
    /**
     * @protected
     * @type {Array}
     */
    this.entities = []
  }
  /**
   * @param entity1
   * @param entity2
   * @return {boolean}
   */
  comparison (entity1, entity2) {
    return entity1 === entity2
  }

  /**
   * @protected
   */
  handleChange () {
    this.table.reRenderView()
  }
  add (entity) {
    if (this.isChosen(entity) === false) {
      this.entities.push(entity)
    } else {
      this.remove(entity)
    }
    this.handleChange()
  }

  /**
   * @protected
   * @param entity
   */
  remove (entity) {
    this.entities = this.entities.filter((curEntity) => {
      return curEntity !== entity
    })
  }
  set (entities) {
    this.entities = entities
    this.handleChange()
  }
  get() {
    return this.entities
  }
  isChosen(entity) {
    return this.entities.find((entity2) => {
      return this.comparison(entity, entity2)
    }) !== undefined
  }
}