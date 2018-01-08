import ColumnManagerInterface from '../../src/Models/ColumnManager/ColumnManagerInterface'
import TableBuilder from '../../src/Builders/TableBuilder';
describe('TableBuilder', () => {
  const columnManager = new ColumnManagerInterface()
  columnManager.createBodyColumns = () => []
  columnManager.getHeadColumns = () => []
  let renderTimes = 0
  const builder = new TableBuilder(() => {
    renderTimes++
  }, columnManager)
  const table = builder.getTableFacade()
  it('should return 1',() => {
    table.getPaginationManager().setCurrentPage(2)
    expect(renderTimes).toBe(1)
  })
  it('should return 2',() => {
    table.getDensityManager().setDensity(1)
    expect(renderTimes).toBe(2)
  })
  it('should return 3',() => {
    table.getResetManager().reload()
    expect(renderTimes).toBe(3)
  })
  it('should return 4',() => {
    table.getSortManager().by('name')
    expect(renderTimes).toBe(4)
  })
  it('should return 5',() => {
    table.getChooseManager().set([])
    expect(renderTimes).toBe(5)
  })
  it('should return 6',() => {
    table.getRenderManager().reRenderView()
    expect(renderTimes).toBe(6)
  })
})
