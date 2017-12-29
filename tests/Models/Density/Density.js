import RenderInterface from '../../../src/Models/Render/RenderInterface'
import Density from '../../../src/Models/Density/Density';
describe('Density', () => {
  const table = new RenderInterface()
  let renderTimes = 0
  table.reRenderView = () => {
    renderTimes++
  }
  const model = new Density(table, 2)
  it('should return 2', () => {
    expect(model.getDensity()).toBe(2)
  })
  it('should reRenderView 0 times', () => {
    expect(renderTimes).toBe(0)
  })

  it('should return 3', () => {
    model.setDensity(3)
    expect(model.getDensity()).toBe(3)
  })
  it('should reRenderView 1 times', () => {
    expect(renderTimes).toBe(1)
  })
  it('should return 1', () => {
    model.setDensity(1)
    expect(model.getDensity()).toBe(1)
  })
  it('should reRenderView 2 times', () => {
    expect(renderTimes).toBe(2)
  })
})
