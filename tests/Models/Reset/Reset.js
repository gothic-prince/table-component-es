import RenderInterface from '../../../src/Models/Render/RenderInterface'
import Reset from '../../../src/Models/Reset/Reset';

describe('Reset', () => {
  const table = new RenderInterface()
  let renderTimes = 0
  table.reRenderView = () => {
    renderTimes++
  }
  const model = new Reset(table)
  model.reload()
  it('should return', () => {
    expect(renderTimes).toBe(1)
  })
  model.reload()
  it('should return 2', () => {
    expect(renderTimes).toBe(2)
  })
  model.reload()
  it('should return 3', () => {
    expect(renderTimes).toBe(3)
  })
})
