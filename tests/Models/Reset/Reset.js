import RenderInterface from '../../../src/Models/Render/RenderInterface'
import Reset from '../../../src/Models/Reset/Reset';

describe('Reset', () => {
  const table = new RenderInterface()
  let renderTimes = 0
  let handleTimes = 0
  table.reRenderView = () => {
    renderTimes++
  }
  const handle = () => {
    handleTimes++
  }
  const model = new Reset(table, handle)
  model.reload()
  it('should reRenderView 1', () => {
    expect(renderTimes).toBe(1)
    expect(handleTimes).toBe(1)
  })
  model.reload()
  it('should reRenderView 2', () => {
    expect(renderTimes).toBe(1)
    expect(handleTimes).toBe(1)
  })
  model.reload()
  it('should reRenderView 3', () => {
    expect(renderTimes).toBe(3)
    expect(handleTimes).toBe(3)
  })
})
