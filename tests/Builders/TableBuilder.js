import TableBuilderAbstract from '../../src/Builders/TableBuilderAbstract'
import ColumnManagerInterface from '../../src/Models/ColumnManager/ColumnManagerInterface'
describe('TableBuilder', () => {
  const columnManager = new ColumnManagerInterface()
  columnManager.createBodyColumns = () => []
  columnManager.getHeadColumns = () => []
  let renderTimes = 0
  const builder = new TableBuilderAbstract(() => {
    renderTimes++
  }, columnManager)
  const table = builder.createTableFacade()
  it('should return 1',() => {
    table.getPaginationManager().setCurrentPage(2)
    expect(renderTimes).toBe(1)
  })
  it('should return 2',() => {
    table.getRenderManager().reRenderView()
    expect(renderTimes).toBe(2)
  })
  it('should return 3',() => {
    table.getDensityManager().setDensity(1)
    expect(renderTimes).toBe(3)
  })
  it('should return 4',() => {
    table.getResetManager().reload()
    expect(renderTimes).toBe(4)
  })
  it('should return 5',() => {
    table.getSortManager().by('name')
    expect(renderTimes).toBe(5)
  })
  it('should return 6',() => {
    table.getChooseManager().set([])
    expect(renderTimes).toBe(6)
  })
})
