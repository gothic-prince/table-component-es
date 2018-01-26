import SortManager from '../../../dist/Models/SortManager/SortManager';
import ColumnManager from '../../../dist/Models/ColumnManager/ColumnManager';
import ColumnBodyEntity from '../../../dist/Entities/BodyColumn/ColumnBodyEntity';
import ColumnHeadEntity from '../../../dist/Entities/HeadColumn/ColumnHeadEntity';
import RenderInterface from '../../../dist/Models/RenderManager/RenderManagerInterface';
import {TABLE_SORT_ASC, TABLE_SORT_DESC} from '../../../dist/Models/SortManager/constants';
describe('SortManager', () => {
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
  const columnManager = new ColumnManager(render, getBody, headColumns)
  const sort = new SortManager(render, columnManager)
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

    it('should return 4', () => {
      expect(renderTimes).toBe(4)
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

    it('should return 8', () => {
      expect(renderTimes).toBe(8)
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

    it('should return 12', () => {
      expect(renderTimes).toBe(12)
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

    it('should return 16', () => {
      expect(renderTimes).toBe(16)
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

    it('should return 20', () => {
      expect(renderTimes).toBe(20)
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

    it('should return 24', () => {
      expect(renderTimes).toBe(24)
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

    it('should return 28', () => {
      expect(renderTimes).toBe(28)
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

    it('should return 32', () => {
      expect(renderTimes).toBe(32)
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

    it('should return 36', () => {
      expect(renderTimes).toBe(36)
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

    it('should return 40', () => {
      expect(renderTimes).toBe(40)
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

    it('should return 44', () => {
      expect(renderTimes).toBe(44)
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
    it('should return 48', () => {
      expect(renderTimes).toBe(48)
    })
  })
})
