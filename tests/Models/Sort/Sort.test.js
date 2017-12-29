import Sort from '../../../src/Models/Sort/Sort';
import ColumnManager from '../../../src/Models/ColumnManager/ColumnManager';
import ColumnBodyEntity from '../../../src/Entities/BodyColumn/ColumnBodyEntity';
import ColumnHeadEntity from '../../../src/Entities/HeadColumn/ColumnHeadEntity';
import RenderInterface from '../../../src/Models/Render/RenderInterface';
describe('Sort', () => {
  const render = new RenderInterface()
  let renderTimes = 0
  let handleTimes = 0
  render.reRenderView = () => {
    renderTimes++
  }
  const handle = () => {
    handleTimes++
  }
  const getBody = (entity) => {
    return [
      new ColumnBodyEntity('name', entity.name, entity.name),
      new ColumnBodyEntity('id', entity.id, entity.id),
    ]
  }
  const headColumns = [
    new ColumnHeadEntity('name', 'Name'),
    new ColumnHeadEntity('id', '#ID')
  ]
  const columnManager = new ColumnManager(getBody, headColumns)
  const sort = new Sort(render, columnManager, handle)
  const entities = [
    {
      name: 'Paul',
      id: 2,
    },
    {
      name: 'Alex',
      id: 1,
    },
    {
      name: 'Ketty',
      id: 4,
    },
  ]
  it('order: Paul, Alex, Ketty', () => {
    expect(sort.getEntities(entities)[0].name).toBe('Paul')
    expect(sort.getEntities(entities)[0].id).toBe(2)

    expect(sort.getEntities(entities)[1].name).toBe('Alex')
    expect(sort.getEntities(entities)[1].id).toBe(1)

    expect(sort.getEntities(entities)[2].name).toBe('Ketty')
    expect(sort.getEntities(entities)[2].id).toBe(4)
  })

  it('hadnle and render times', () => {
    expect(renderTimes).toBe(0)
    expect(handleTimes).toBe(0)
  })

  it('order: Alex, Paul, Ketty', () => {
    sort.by('id')

    expect(sort.getEntities(entities)[0].name).toBe('Alex')
    expect(sort.getEntities(entities)[0].id).toBe(1)

    expect(sort.getEntities(entities)[1].name).toBe('Paul')
    expect(sort.getEntities(entities)[1].id).toBe(2)

    expect(sort.getEntities(entities)[2].name).toBe('Ketty')
    expect(sort.getEntities(entities)[2].id).toBe(4)
  })

  it('hadnle and render times', () => {
    expect(renderTimes).toBe(1)
    expect(handleTimes).toBe(1)
  })

  it('order: Ketty, Paul, Alex', () => {
    sort.by('id')

    expect(sort.getEntities(entities)[0].name).toBe('Ketty')
    expect(sort.getEntities(entities)[0].id).toBe(4)

    expect(sort.getEntities(entities)[1].name).toBe('Paul')
    expect(sort.getEntities(entities)[1].id).toBe(2)

    expect(sort.getEntities(entities)[2].name).toBe('Alex')
    expect(sort.getEntities(entities)[2].id).toBe(1)
  })

  it('hadnle and render times', () => {
    expect(renderTimes).toBe(2)
    expect(handleTimes).toBe(2)
  })

  it('order: Alex, Ketty, Paul', () => {
    sort.by('name')

    expect(sort.getEntities(entities)[0].name).toBe('Alex')
    expect(sort.getEntities(entities)[0].id).toBe(1)

    expect(sort.getEntities(entities)[1].name).toBe('Ketty')
    expect(sort.getEntities(entities)[1].id).toBe(4)

    expect(sort.getEntities(entities)[2].name).toBe('Paul')
    expect(sort.getEntities(entities)[2].id).toBe(2)
  })

  it('hadnle and render times', () => {
    expect(renderTimes).toBe(3)
    expect(handleTimes).toBe(3)
  })

  it('order: Paul, Ketty, Alex', () => {
    sort.by('name')
    expect(sort.getEntities(entities)[0].name).toBe('Paul')
    expect(sort.getEntities(entities)[0].id).toBe(2)

    expect(sort.getEntities(entities)[1].name).toBe('Ketty')
    expect(sort.getEntities(entities)[1].id).toBe(4)

    expect(sort.getEntities(entities)[2].name).toBe('Alex')
    expect(sort.getEntities(entities)[2].id).toBe(1)
  })

  it('hadnle and render times', () => {
    expect(renderTimes).toBe(4)
    expect(handleTimes).toBe(4)
  })
})