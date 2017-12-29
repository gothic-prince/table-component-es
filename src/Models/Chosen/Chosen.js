import ChosenInterface from './ChosenInterface';
export default class Chosen extends ChosenInterface {
  /**
   * @param table {RenderInterface}
   * @param handle {Function}
   */
  constructor(table, handle = null) {
    super()
    /**
     * @protected
     * @type {RenderInterface}
     */
    this.table = table
    /**
     * @protected
     * @type {Function}
     */
    this.handle = handle
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
    if (this.handle !== null) {
      this.handle(this.entities)
    }
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