export default class ColumnHeadEntityInterface {
  getLabel () {}
  isHidden() {}
  setHidden(value) {}
  isHideable() {}
  setHideable(value) {}
  getFieldName () {}
  isReverse () {}
  isActive () {}
  setActive (bool) {}
  setReverse(bool){}
  needSort(){}
  /**
   * @param columnManager {ColumnManagerInterface}
   * @return {ColumnHeadEntity}
   */
  setColumnManager (columnManager) {}
}