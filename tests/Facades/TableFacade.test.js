import TableFacade from '../../src/Facades/TableFacade';
import ColumnManagerInterface from '../../src/Models/ColumnManager/ColumnManagerInterface';
import RenderInterface from '../../src/Models/Render/RenderInterface';
import PaginationInterface from '../../src/Models/Pagination/PaginationInterface';
import DensityInterface from '../../src/Models/Density/DensityInterface';
import ResetInterface from '../../src/Models/Reset/ResetInterface';
import ChosenInterface from '../../src/Models/Chosen/ChosenInterface';
import SortInterface from '../../src/Models/Sort/SortInterface';
describe('TableFacade', () => {
  const facade = new TableFacade()

  const columnManager = new ColumnManagerInterface()
  const render = new RenderInterface()
  const pag = new PaginationInterface()
  const density = new DensityInterface()
  const reset = new ResetInterface()
  const sort = new SortInterface()
  const chooser = new ChosenInterface()

  pag.getCutEntities = () => [1,6]
  sort.getSortedEntities = (data) => data

  facade.setChooseManager(chooser)
  facade.setRenderManager(render)
  facade.setDensity(density)
  facade.setPagination(pag)
  facade.setColumnManager(columnManager)
  facade.setReset(reset)
  facade.setSortManager(sort)

  it('should return object of ColumnManagerInterface', () => {
    expect(facade.getColumnManager() instanceof ColumnManagerInterface).toBe(true)
  })
  it('should return object of RenderInterface', () => {
    expect(facade.getRenderManager() instanceof RenderInterface).toBe(true)
  })
  it('should return object of PaginationInterface', () => {
    expect(facade.getPaginationManager() instanceof PaginationInterface).toBe(true)
  })
  it('should return object of DensityInterface', () => {
    expect(facade.getDensityManager() instanceof DensityInterface).toBe(true)
  })
  it('should return object of ResetInterface', () => {
    expect(facade.getResetManager() instanceof ResetInterface).toBe(true)
  })
  it('should return object of SortInterface', () => {
    expect(facade.getSortManager() instanceof SortInterface).toBe(true)
  })
  it('should return object of ChosenInterface', () => {
    expect(facade.getChooseManager() instanceof ChosenInterface).toBe(true)
  })
  describe('getEntities', () => {
    let data = [1,2,3,4]
    it('should return 2', () => {
      data = facade.getEntities(data)
      expect(data.length).toBe(2)
    })
    it('should return 1', () => {
      expect(data[0]).toBe(1)
    })
    it('should return 6', () => {
      expect(data[1]).toBe(6)
    })
  })
})
