import Chosen from '../../../src/Models/DataSelectorManager/DataSelectorManager';
import RenderInterface from '../../../src/Models/RenderManager/RenderManagerInterface';
describe('DataSelectorManager', () => {
  const table = new RenderInterface()
  let renderTimes = 0
  table.reRenderView = () => {
    renderTimes++
  }
  const data = ['Paul', 'Alex', 'Ketty', 'Den', 'Jone']
  const model = new Chosen(table)
  it('should has\'nt nothing', () => {
    expect(model.get().length).toBe(0)
  })
  it('should has: Alex', () => {
    model.add(data[1])
    expect(model.get()[0]).toBe('Alex')
    expect(model.get()[0]).toBe(data[1])
    expect(model.get().length).toBe(1)
  })
  it('should reRenderView 1 times', () => {
    expect(renderTimes).toBe(1)
  })

  it('should has: Alex, Ketty, Den', () => {
    model.add(data[2])
    model.add(data[3])
    expect(model.get()[0]).toBe('Alex')
    expect(model.get()[1]).toBe('Ketty')
    expect(model.get()[2]).toBe('Den')
    expect(model.get().length).toBe(3)
  })
  it('should reRenderView 3 times', () => {
    expect(renderTimes).toBe(3)
  })

  it('should has: Paul, Alex, Den', () => {
    model.add(data[0])
    model.add(data[1])
    expect(model.get()[0]).toBe('Ketty')
    expect(model.get()[1]).toBe('Den')
    expect(model.get()[2]).toBe('Paul')
    expect(model.get().length).toBe(3)
  })
  it('should reRenderView 5 times', () => {
    expect(renderTimes).toBe(5)
  })

  it('should has: Den', () => {
    model.add(data[0])
    model.add(data[2])
    expect(model.get()[0]).toBe('Den')
    expect(model.get().length).toBe(1)
  })
  it('should reRenderView 7 times', () => {
    expect(renderTimes).toBe(7)
  })

  it('should has: all', () => {
    model.set(data)
    expect(model.get()).toBe(data)
    expect(model.get().length).toBe(5)
  })
  it('should reRenderView 8 times', () => {
    expect(renderTimes).toBe(8)
  })
  it('should has: nothing', () => {
    model.set([])
    expect(model.get().length).toBe(0)
  })
  it('should reRenderView 9 times', () => {
    expect(renderTimes).toBe(9)
  })
})
