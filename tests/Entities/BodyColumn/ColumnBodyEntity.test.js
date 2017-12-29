import ColumnBodyEntity from '../../../src/Entities/BodyColumn/ColumnBodyEntity';
describe('ColumnBodyEntity', () => {
  describe('3 params', () => {
    const entity = new ColumnBodyEntity('name', 'Alex', '<b>Alex</b>')
    it('should return "name"', () => {
      expect(entity.getName()).toBe("name")
    })
    it('should return "Alex"', () => {
      expect(entity.getRawValue()).toBe("Alex")
    })
    it('should return "<b>Alex</b>"', () => {
      expect(entity.getHtmlValue()).toBe("<b>Alex</b>")
    })
  })
  describe('2 params', () => {
    const entity = new ColumnBodyEntity('phone', 213987234, '<i>213987234</i>')
    it('should return "phone"', () => {
      expect(entity.getName()).toBe("phone")
    })
    it('should return 213987234', () => {
      expect(entity.getRawValue()).toBe(213987234)
    })
    it('should return "<i>213987234</i>"', () => {
      expect(entity.getHtmlValue()).toBe("<i>213987234</i>")
    })
  })
  describe('1 params', () => {
    let error = ''
    try {
      (new ColumnBodyEntity('address'))
    } catch (e) {
      error = e.message
    }
    it('should return "Parameter(2) should be defined"', () => {
      expect(error).toBe('Parameter(2) should be defined')
    })
  })
  describe('0 params', () => {
    let error = ''
    try {
      (new ColumnBodyEntity())
    } catch (e) {
      error = e.message
    }
    it('should return "Parameter(1) should be defined"', () => {
      expect(error).toBe('Parameter(1) should be defined')
    })
  })
})
