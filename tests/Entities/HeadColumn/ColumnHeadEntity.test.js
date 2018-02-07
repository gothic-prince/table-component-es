import ColumnHeadEntity from '../../../dist/Entities/HeadColumn/ColumnHeadEntity';
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
    it('width should be null', () => {
      expect(entity.getWidth()).toBe(null)
    })
    it('width should be 150', () => {
      entity.setWidth(150)
      expect(entity.getWidth()).toBe(150)
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
    it('width should be null', () => {
      expect(entity.getWidth()).toBe(null)
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
    it('width should be null', () => {
      expect(entity.getWidth()).toBe(null)
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

})
