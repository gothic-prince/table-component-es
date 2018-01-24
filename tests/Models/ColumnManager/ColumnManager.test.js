import ColumnManager from '../../../dist/Models/ColumnManager/ColumnManager';
import ColumnHeadEntity from '../../../dist/Entities/HeadColumn/ColumnHeadEntity';
import ColumnBodyEntity from '../../../dist/Entities/BodyColumn/ColumnBodyEntity';
describe('ColumnManager', () => {
  const columnName = new ColumnHeadEntity('name', 'Name', false, false)
  const columnId = new ColumnHeadEntity('id', '#ID', true, true)
  columnId.setActive(true)
  columnId.setReverse(true)

  const getBody = (entity) => {
    return [
      new ColumnBodyEntity('name', entity.name, entity.name),
      new ColumnBodyEntity('id', entity.id, entity.id),
    ]
  }
  const model = new ColumnManager(getBody, [
    columnName,
    columnId
  ])

  describe('Head', () => {
    const columns = model.getHeadColumns()
    it('should return "name"', () => {
      expect(columns[0].getFieldName()).toBe("name")
    })
    it('should return "Name"', () => {
      expect(columns[0].getLabel()).toBe("Name")
    })
    it('should return false', () => {
      expect(columns[0].isActive()).toBe(false)
    })
    it('should return false', () => {
      expect(columns[0].isReverse()).toBe(false)
    })
    it('should return false', () => {
      expect(columns[0].isHideable()).toBe(false)
    })
    it('should return false', () => {
      expect(columns[0].isHidden()).toBe(false)
    })

    it('should return "id"', () => {
      expect(columns[1].getFieldName()).toBe("id")
    })
    it('should return "#ID"', () => {
      expect(columns[1].getLabel()).toBe("#ID")
    })
    it('should return true', () => {
      expect(columns[1].isActive()).toBe(true)
    })
    it('should return true', () => {
      expect(columns[1].isReverse()).toBe(true)
    })
    it('should return true', () => {
      expect(columns[1].isHideable()).toBe(true)
    })
    it('should return true', () => {
      expect(columns[1].isHidden()).toBe(true)
    })
  })
  describe('Body', () => {
    const columns = model.createBodyColumns({
      name: 'Alex',
      id: 5
    })
    it('should return "Alex"', () => {
      expect(columns[0].getRawValue()).toBe("Alex")
    })
    it('should return "Alex" again', () => {
      expect(columns[0].getHtmlValue()).toBe("Alex")
    })
    it('should return "name"', () => {
      expect(columns[0].getName()).toBe("name")
    })

    it('should return 5', () => {
      expect(columns[1].getRawValue()).toBe(5)
    })
    it('should return 5 again', () => {
      expect(columns[1].getHtmlValue()).toBe(5)
    })
    it('should return "id"', () => {
      expect(columns[1].getName()).toBe("id")
    })
  })

})