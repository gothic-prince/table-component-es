import ColumnEntityFactory from '../../dist/Factories/ColumnEntityFactory';
describe('ColumnEntityFactory', () => {
  const factory = new ColumnEntityFactory(true)
  describe('Head', () => {
    factory.addHeader('id', '#ID: ')
    factory.addHeader('name', 'Name: ')
    factory.addHeader('phone', 'Phone: ', false, true, false)
    const columns = factory.getHeaders()
    describe('id', () => {
      it('should return id', () => {
        expect(columns[0].getFieldName()).toBe('id')
      })
      it('should return #ID', () => {
        expect(columns[0].getLabel()).toBe('#ID: ')
      })
      it('should be not hidebale', () => {
        expect(columns[0].isHideable()).toBe(false)
      })
      it('should be not hidden', () => {
        expect(columns[0].isHidden()).toBe(false)
      })
      it('should be sortable', () => {
        expect(columns[0].needSort()).toBe(true)
      })
      it('should return null', () => {
        expect(columns[0].getWidth()).toBe(null)
      })
    })
    describe('name', () => {
      it('should return name', () => {
        expect(columns[1].getFieldName()).toBe('name')
      })
      it('should return Name', () => {
        expect(columns[1].getLabel()).toBe('Name: ')
      })
      it('should be hidebale', () => {
        expect(columns[1].isHideable()).toBe(true)
      })
      it('should be not hidden', () => {
        expect(columns[1].isHidden()).toBe(false)
      })
      it('should be sortable', () => {
        expect(columns[1].needSort()).toBe(true)
      })
      it('should return null', () => {
        expect(columns[1].getWidth()).toBe(null)
      })
    })
    describe('phone', () => {
      it('should return phone', () => {
        expect(columns[2].getFieldName()).toBe('phone')
      })
      it('should return Phone', () => {
        expect(columns[2].getLabel()).toBe('Phone: ')
      })
      it('should be not hidebale', () => {
        expect(columns[2].isHideable()).toBe(false)
      })
      it('should be hidden', () => {
        expect(columns[2].isHidden()).toBe(true)
      })
      it('should be not sortable', () => {
        expect(columns[2].needSort()).toBe(false)
      })
      it('should return null', () => {
        expect(columns[2].getWidth()).toBe(null)
      })
    })
  })
  describe('Body', () => {
    factory.addBody('id', 1)
    factory.addBody('name', 'Paul', '<b>Paul</b>')
    factory.addBody('phone', 281378213, '<span>281378213</span>')
    const columns = factory.getBodies()
    describe('id', () => {
      it('should return id', () => {
        expect(columns[0].getName()).toBe('id')
      })
      it('should return 1', () => {
        expect(columns[0].getRawValue()).toBe(1)
      })
      it('should return 1 again', () => {
        expect(columns[0].getHtmlValue()).toBe(1)
      })
    })
    describe('name', () => {
      it('should return name', () => {
        expect(columns[1].getName()).toBe('name')
      })
      it('should return Paul', () => {
        expect(columns[1].getRawValue()).toBe('Paul')
      })
      it('should return <b>Paul</b>', () => {
        expect(columns[1].getHtmlValue()).toBe('<b>Paul</b>')
      })
    })
    describe('phone', () => {
      it('should return phone', () => {
        expect(columns[2].getName()).toBe('phone')
      })
      it('should return 281378213', () => {
        expect(columns[2].getRawValue()).toBe(281378213)
      })
      it('should return <b>Paul</b>', () => {
        expect(columns[2].getHtmlValue()).toBe('<span>281378213</span>')
      })
    })
  })
})
