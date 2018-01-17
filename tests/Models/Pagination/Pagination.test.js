import Pagination from '../../../src/Models/PaginationManager/PaginationManager'
import RenderInterface from '../../../src/Models/RenderManager/RenderManagerInterface';
describe('PaginationManager', () => {
  const table = new RenderInterface()
  let renderTimes = 0
  table.reRenderView = () => {
    renderTimes++
  }
  const model = new Pagination(table)
  model.setLimitRows(10)
  const data = []
  for (let i = 1; i <= 41; i++) {
    data.push(i)
  }
  describe('Page #1' , () => {
    it('Should return array length 10' , () => {
      expect(model.getCutEntities(data).length).toBe(10)
    })
    it('First item is 1' , () => {
      expect(model.getCutEntities(data)[0]).toBe(1)
    })
    it('Last item is 10' , () => {
      expect(model.getCutEntities(data)[9]).toBe(10)
    })
    it('has\'nt prev' , () => {
      expect(model.hasPrev(data)).toBe(false)
    })
    it('has next' , () => {
      expect(model.hasNext(data)).toBe(true)
    })
    it('page number should be 10' , () => {

      expect(model.getLimitRows()).toBe(10)
    })
    it('page number should be 1' , () => {
      expect(model.getCurrentPage()).toBe(1)
    })

  })
  describe('Page #2' , () => {
    it('Should return array length 10' , () => {
      model.next(data)
      expect(model.getCutEntities(data).length).toBe(10)
    })
    it('First item is 11' , () => {
      expect(model.getCutEntities(data)[0]).toBe(11)
    })
    it('Last item is 20' , () => {
      expect(model.getCutEntities(data)[9]).toBe(20)
    })
    it('has prev' , () => {
      expect(model.hasPrev(data)).toBe(true)
    })
    it('has next' , () => {
      expect(model.hasNext(data)).toBe(true)
    })
    it('page number should be 2' , () => {
      expect(model.getCurrentPage()).toBe(2)
    })
  })
  describe('Page #3' , () => {
    it('Should return array length 10' , () => {
      model.next(data)
      expect(model.getCutEntities(data).length).toBe(10)
    })
    it('First item is 21' , () => {
      expect(model.getCutEntities(data)[0]).toBe(21)
    })
    it('Last item is 30' , () => {
      expect(model.getCutEntities(data)[9]).toBe(30)
    })
    it('has prev' , () => {
      expect(model.hasPrev(data)).toBe(true)
    })
    it('has next' , () => {
      expect(model.hasNext(data)).toBe(true)
    })
    it('page number should be 3' , () => {
      expect(model.getCurrentPage()).toBe(3)
    })
  })
  describe('Page #2 again' , () => {
    it('Should return array length 10' , () => {
      model.prev(data)
      expect(model.getCutEntities(data).length).toBe(10)
    })
    it('First item is 11' , () => {
      expect(model.getCutEntities(data)[0]).toBe(11)
    })
    it('Last item is 20' , () => {
      expect(model.getCutEntities(data)[9]).toBe(20)
    })
    it('has prev' , () => {
      expect(model.hasPrev(data)).toBe(true)
    })
    it('has next' , () => {
      expect(model.hasNext(data)).toBe(true)
    })
    it('page number should be 2' , () => {
      expect(model.getCurrentPage()).toBe(2)
    })
  })
  describe('Page #1 again' , () => {
    it('Should return array length 10' , () => {
      model.prev(data)
      expect(model.getCutEntities(data).length).toBe(10)
    })
    it('First item is 1' , () => {
      expect(model.getCutEntities(data)[0]).toBe(1)
    })
    it('Last item is 10' , () => {
      expect(model.getCutEntities(data)[9]).toBe(10)
    })
    it('has\'nt prev' , () => {
      expect(model.hasPrev(data)).toBe(false)
    })
    it('has next' , () => {
      expect(model.hasNext(data)).toBe(true)
    })
    it('page number should be 1' , () => {
      expect(model.getCurrentPage()).toBe(1)
    })
  })
  describe('Page #1 again, because page can not be less 1' , () => {
    it('Should return array length 10' , () => {
      model.prev(data)
      expect(model.getCutEntities(data).length).toBe(10)
    })
    it('First item is 1' , () => {
      expect(model.getCutEntities(data)[0]).toBe(1)
    })
    it('Last item is 10' , () => {
      expect(model.getCutEntities(data)[9]).toBe(10)
    })
    it('has\'nt prev' , () => {
      expect(model.hasPrev(data)).toBe(false)
    })
    it('has next' , () => {
      expect(model.hasNext(data)).toBe(true)
    })
    it('page number should be 1' , () => {
      expect(model.getCurrentPage()).toBe(1)
    })
  })
  describe('Page #4' , () => {
    it('Should return array length 10' , () => {
      model.setCurrentPage(4)
      expect(model.getCutEntities(data).length).toBe(10)
    })
    it('First item is 31' , () => {
      expect(model.getCutEntities(data)[0]).toBe(31)
    })
    it('Last item is 40' , () => {
      expect(model.getCutEntities(data)[9]).toBe(40)
    })
    it('has prev' , () => {
      expect(model.hasPrev(data)).toBe(true)
    })
    it('has next' , () => {
      expect(model.hasNext(data)).toBe(true)
    })
    it('page number should be 4' , () => {
      expect(model.getCurrentPage()).toBe(4)
    })
  })
  describe('Page #5' , () => {
    it('Should return array length 1' , () => {
      model.next(data)
      expect(model.getCutEntities(data).length).toBe(1)
    })
    it('First item is 41' , () => {
      expect(model.getCutEntities(data)[0]).toBe(41)
    })
    it('has prev' , () => {
      expect(model.hasPrev(data)).toBe(true)
    })
    it('has\'nt next' , () => {
      expect(model.hasNext(data)).toBe(false)
    })
    it('page number should be 5' , () => {
      expect(model.getCurrentPage()).toBe(5)
    })
  })
  describe('Page #5 again' , () => {
    it('Should return array length 1' , () => {
      model.next(data)
      expect(model.getCutEntities(data).length).toBe(1)
    })
    it('First item is 41' , () => {
      expect(model.getCutEntities(data)[0]).toBe(41)
    })
    it('has prev' , () => {
      expect(model.hasPrev(data)).toBe(true)
    })
    it('has\'nt next' , () => {
      expect(model.hasNext(data)).toBe(false)
    })
    it('page number should be 5' , () => {
      expect(model.getCurrentPage()).toBe(5)
    })
    it('should be 5' , () => {
      expect(model.getCurrentPage()).toBe(model.getLatestPage(data))
    })
    it('should be 7' , () => {
      expect(renderTimes).toBe(7)
    })
    it('should be 8' , () => {
      model.setLimitRows(25)
      expect(model.getLimitRows()).toBe(25)
      expect(renderTimes).toBe(8)
    })
    it('should be 9' , () => {
      model.setLimitRows(50)
      expect(model.getLimitRows()).toBe(50)
      expect(renderTimes).toBe(9)
    })
  })
})
