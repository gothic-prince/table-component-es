export default class DataSelectorManagerInterface {
  add (entity) {}
  /**
   * @param entities {Array}
   */
  set (entities) {}

  /**
   * @return {Array}
   */
  get() {}
  /**
   * @param entity
   * @return {Boolean}
   */
  isChosen(entity) {}
  /**
   * @param entity1
   * @param entity2
   * @return {boolean}
   */
  comparison (entity1, entity2) {}
  /**
   * @param entities {Array}
   */
  all (entities) {}
  /**
   * @param entities {Array}
   * @return {boolean}
   */
  isAllSelected (entities) {}
}
