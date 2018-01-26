import ColumnEntityFactoryAbstract from './ColumnEntityFactoryAbstract'
import ColumnHeadEntity from '../Entities/HeadColumn/ColumnHeadEntity'
import ColumnBodyEntity from '../Entities/BodyColumn/ColumnBodyEntity'
export default class ColumnEntityFactory extends ColumnEntityFactoryAbstract {
  constructor(firstIsMain = true) {
    super(firstIsMain)
  }
  /**
   * @protected
   * @param name {String}
   * @param label {String}
   * @param hideable {Boolean}
   * @param hidden {Boolean}
   * @param sortable {Boolean}
   * @return {ColumnHeadEntityInterface}
   */
  createHeadColumn (name, label, hideable, hidden, sortable) {
    const column = new ColumnHeadEntity(name, label, hidden, hideable)
    column.setNeedSort(sortable)
    return column
  }

  /**
   * @protected
   * @param name {String}
   * @param row
   * @param html
   * @return {ColumnBodyEntityInterface}
   */
  createBodyColumn (name, row, html) {
    return new ColumnBodyEntity(name, row, html)
  }
}
