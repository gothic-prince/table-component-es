import TableFacade from '../../src/Facades/TableFacade';
import ColumnManagerInterface from '../../src/Models/ColumnManager/ColumnManagerInterface';
import RenderInterface from '../../src/Models/RenderManager/RenderManagerInterface';
import PaginationInterface from '../../src/Models/PaginationManager/PaginationManagerInterface';
import DensityInterface from '../../src/Models/DensityManager/DensityManagerInterface';
import ResetInterface from '../../src/Models/ResetManager/ResetManagerInterface';
import ChosenInterface from '../../src/Models/DataSelectorManager/DataSelectorManagerInterface';
import SortInterface from '../../src/Models/SortManager/SortManagerInterface';
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

  facade.setDataSelectorManager(chooser)
  facade.setRenderManager(render)
  facade.setDensity(density)
  facade.setPagination(pag)
  facade.setColumnManager(columnManager)
  facade.setReset(reset)
  facade.setSortManager(sort)

  it('should return object of ColumnManagerInterface', () => {
    expect(facade.getColumnManager() instanceof ColumnManagerInterface).toBe(true)
  })
  it('should return object of RenderManagerInterface', () => {
    expect(facade.getRenderManager() instanceof RenderInterface).toBe(true)
  })
  it('should return object of PaginationManagerInterface', () => {
    expect(facade.getPaginationManager() instanceof PaginationInterface).toBe(true)
  })
  it('should return object of DensityManagerInterface', () => {
    expect(facade.getDensityManager() instanceof DensityInterface).toBe(true)
  })
  it('should return object of ResetManagerInterface', () => {
    expect(facade.getResetManager() instanceof ResetInterface).toBe(true)
  })
  it('should return object of SortManagerInterface', () => {
    expect(facade.getSortManager() instanceof SortInterface).toBe(true)
  })
  it('should return object of DataSelectorManagerInterface', () => {
    expect(facade.getDataSelectorManager() instanceof ChosenInterface).toBe(true)
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
