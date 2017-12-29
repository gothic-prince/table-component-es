export default class PaginationInterface {
  /**
   * @param entities {Array}
   */
  first(entities) {}
  /**
   * @param entities {Array}
   */
  prev(entities) {}
  /**
   * @param entities {Array}
   */
  next(entities) {}
  /**
   * @param entities {Array}
   */
  latest(entities) {}
  /**
   * @param entities
   * @return {Boolean}
   */
  hasPrev(entities){}
  /**
   * @param entities
   * @return {Boolean}
   */
  hasNext(entities){}
  /**
   * @param pageNumber {Number}
   */
  setCurrentPage(pageNumber) {}
  /**
   * @return {Number}
   */
  getCurrentPage() {}
  /**
   * @param entities
   * @return {Number}
   */
  getLatestPage(entities) {}
  /**
   * @return {Number}
   */
  getLimitRows () {}
  /**
   * @param max {Number}
   */
  setLimitRows (max) {}
  /**
   * @return {Number[]}
   */
  getArrayLimitRows () {}
  /**
   * @param entities {Array}
   * @return {Array}
   */
  getEntities(entities) {}
}