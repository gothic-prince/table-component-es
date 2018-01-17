import Sort from '../../../src/Models/Sort/Sort';
import ColumnManager from '../../../src/Models/ColumnManager/ColumnManager';
import ColumnBodyEntity from '../../../src/Entities/BodyColumn/ColumnBodyEntity';
import ColumnHeadEntity from '../../../src/Entities/HeadColumn/ColumnHeadEntity';
import RenderInterface from '../../../src/Models/Render/RenderInterface';
import {TABLE_SORT_ASC, TABLE_SORT_DESC} from '../../../src/Models/Sort/constants';
describe('Sort', () => {
  const render = new RenderInterface()
  let renderTimes = 0
  render.reRenderView = () => {
    renderTimes++
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
  const sort = new Sort(render, columnManager)
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
  describe('Initialize', () => {
    it('should has order: Paul, Alex, Ketty', () => {
      expect(sort.getSortedEntities(entities)[0].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[0].id).toBe(2)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[1].id).toBe(1)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[2].id).toBe(4)
    })

    it('should return 0', () => {
      expect(renderTimes).toBe(0)
    })
  })
  describe('Sorting by ID', () => {
    it('should has order: Ketty, Paul, Alex', () => {
      sort.by('id')

      expect(sort.getSortedEntities(entities)[0].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[0].id).toBe(4)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[1].id).toBe(2)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[2].id).toBe(1)
    })

    it('should return 1', () => {
      expect(renderTimes).toBe(1)
    })
  })
  describe('Sorting by ID', () => {
    it('should has order: Alex, Paul, Ketty', () => {
      sort.by('id')

      expect(sort.getSortedEntities(entities)[0].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[0].id).toBe(1)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[1].id).toBe(2)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[2].id).toBe(4)
    })

    it('should return 2', () => {
      expect(renderTimes).toBe(2)
    })
  })

  describe('Sorting by Name', () => {
    it('should has order: Paul, Ketty, Alex', () => {
      sort.by('name')
      expect(sort.getSortedEntities(entities)[0].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[0].id).toBe(2)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[1].id).toBe(4)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[2].id).toBe(1)
    })

    it('should return 3', () => {
      expect(renderTimes).toBe(3)
    })
  })
  describe('Sorting by Name', () => {
    it('should has order: Alex, Ketty, Paul', () => {
      sort.by('name')

      expect(sort.getSortedEntities(entities)[0].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[0].id).toBe(1)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[1].id).toBe(4)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[2].id).toBe(2)
    })

    it('should return 4', () => {
      expect(renderTimes).toBe(4)
    })
  })

  describe('Sorting by Name again', () => {
    it('should has order: Paul, Ketty, Alex', () => {
      sort.by('name')
      expect(sort.getSortedEntities(entities)[0].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[0].id).toBe(2)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[1].id).toBe(4)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[2].id).toBe(1)
    })

    it('should return 5', () => {
      expect(renderTimes).toBe(5)
    })
  })
  describe('Sorting by ID', () => {
    it('should has order: Ketty, Paul, Alex', () => {
      sort.by('id', TABLE_SORT_DESC)

      expect(sort.getSortedEntities(entities)[0].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[0].id).toBe(4)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[1].id).toBe(2)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[2].id).toBe(1)
    })

    it('should return 6', () => {
      expect(renderTimes).toBe(6)
    })
  })
  describe('Sorting by ID', () => {
    it('should has order: Alex, Paul, Ketty', () => {
      sort.by('id', TABLE_SORT_ASC)

      expect(sort.getSortedEntities(entities)[0].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[0].id).toBe(1)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[1].id).toBe(2)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[2].id).toBe(4)
    })

    it('should return 7', () => {
      expect(renderTimes).toBe(7)
    })
  })
  describe('Sorting by ID', () => {
    it('force order againg: Ketty, Paul, Alex', () => {
      sort.by('id', TABLE_SORT_DESC)

      expect(sort.getSortedEntities(entities)[0].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[0].id).toBe(4)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[1].id).toBe(2)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[2].id).toBe(1)
    })

    it('should return 8', () => {
      expect(renderTimes).toBe(8)
    })
  })
  describe('Sorting by Name', () => {
    it('force order: Alex, Ketty, Paul', () => {
      sort.by('name', TABLE_SORT_ASC)

      expect(sort.getSortedEntities(entities)[0].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[0].id).toBe(1)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[1].id).toBe(4)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[2].id).toBe(2)
    })

    it('should return 9', () => {
      expect(renderTimes).toBe(9)
    })
  })
  describe('Sorting by Name', () => {
    it('force order: Paul, Ketty, Alex', () => {
      sort.by('name', TABLE_SORT_DESC)
      expect(sort.getSortedEntities(entities)[0].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[0].id).toBe(2)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[1].id).toBe(4)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[2].id).toBe(1)
    })

    it('should return 10', () => {
      expect(renderTimes).toBe(10)
    })
  })

  describe('Sorting by ID', () => {
    it('force order againg: Ketty, Paul, Alex', () => {
      sort.by('id')

      expect(sort.getSortedEntities(entities)[0].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[0].id).toBe(4)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[1].id).toBe(2)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[2].id).toBe(1)
    })

    it('should return 11', () => {
      expect(renderTimes).toBe(11)
    })
  })
  describe('Sorting by Name', () => {
    it('force order: Paul, Ketty, Alex', () => {
      sort.by('name', TABLE_SORT_DESC)
      expect(sort.getSortedEntities(entities)[0].name).toBe('Paul')
      expect(sort.getSortedEntities(entities)[0].id).toBe(2)

      expect(sort.getSortedEntities(entities)[1].name).toBe('Ketty')
      expect(sort.getSortedEntities(entities)[1].id).toBe(4)

      expect(sort.getSortedEntities(entities)[2].name).toBe('Alex')
      expect(sort.getSortedEntities(entities)[2].id).toBe(1)
    })

    it('should return 12', () => {
      expect(renderTimes).toBe(12)
    })
  })
})