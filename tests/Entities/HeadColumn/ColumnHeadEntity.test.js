import ColumnHeadEntity from '../../../dist/Entities/HeadColumn/ColumnHeadEntity'
import ColumnManagerInterface from '../../../dist/Models/ColumnManager/ColumnManagerInterface'
describe('ColumnHeadEntity', () => {
  describe('1 params', () => {
    const entity = new ColumnHeadEntity('name')
    it('name should be "name"', () => {
      expect(entity.getFieldName()).toBe("name")
    })
    it('label should be "name"', () => {
      expect(entity.getFieldName()).toBe("name")
    })
    it('hidden should be false', () => {
      expect(entity.isHidden()).toBe(false)
    })
    it('hiddeable should be true', () => {
      expect(entity.isHideable()).toBe(true)
    })
    it('active should be false', () => {
      expect(entity.isActive()).toBe(false)
    })
    it('reversed should be false', () => {
      expect(entity.isReverse()).toBe(false)
    })
    it('needSord should be true', () => {
      expect(entity.needSort()).toBe(true)
    })
    it('hidden should be true', () => {
      expect(entity.setHidden(true).isHidden()).toBe(true)
    })
    it('hiddeable should be false', () => {
      expect(entity.setHideable(false).isHideable()).toBe(false)
    })
    it('active should be true', () => {
      expect(entity.setActive(true).isActive()).toBe(true)
    })
    it('reversed should be true', () => {
      expect(entity.setReverse(true).isReverse()).toBe(true)
    })
  })
  describe('3 params', () => {
    const entity = new ColumnHeadEntity('id', '#ID', true)
    it('name should be "id"', () => {
      expect(entity.getFieldName()).toBe("id")
    })
    it('label should be "#ID"', () => {
      expect(entity.getLabel()).toBe("#ID")
    })
    it('hidden should be true', () => {
      expect(entity.isHidden()).toBe(true)
    })
    it('hidden should be false', () => {
      expect(entity.setHidden(false).isHidden()).toBe(false)
    })
  })
  describe('2 params', () => {
    const entity = new ColumnHeadEntity('id', '#ID')
    it('name should be "id"', () => {
      expect(entity.getFieldName()).toBe("id")
    })
    it('label should be "#ID"', () => {
      expect(entity.getLabel()).toBe("#ID")
    })
  })
  describe('0 params', () => {
    let error = ''
    try {
      (new ColumnHeadEntity())
    } catch (e) {
      error = e.message
    }
    it('should return "Parameter(1) should be defined"', () => {
      expect(error).toBe('Parameter(1) should be defined')
    })
  })
  describe('handle', () => {
    const entity = new ColumnHeadEntity('name')
    const columnManager = new ColumnManagerInterface()
    let handledEntity = null
    let handledType = null
    columnManager.handleChangeHeadColumn = (column, type) => {
      handledEntity = column
      handledType = type
    }
    entity.setColumnManager(columnManager)
    it('should return "revers"', () => {
      entity.setReverse(false)
      expect(handledEntity).toBe(entity)
      expect(handledType).toBe('revers')
    })
    it('should return "active"', () => {
      entity.setActive(true)
      expect(handledEntity).toBe(entity)
      expect(handledType).toBe('active')
    })
    it('should return "need_sort"', () => {
      entity.setNeedSort(false)
      expect(handledEntity).toBe(entity)
      expect(handledType).toBe('need_sort')
    })
    it('should return "hideable"', () => {
      entity.setHideable(true)
      expect(handledEntity).toBe(entity)
      expect(handledType).toBe('hideable')
    })
    it('should return "hidden"', () => {
      entity.setHidden(false)
      expect(handledEntity).toBe(entity)
      expect(handledType).toBe('hidden')
    })
  })
})
