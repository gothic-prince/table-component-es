import TableFacade from '../../dist/Facades/TableFacade'
import ColumnManagerInterface from '../../dist/Models/ColumnManager/ColumnManagerInterface'
import RenderManagerInterface from '../../dist/Models/RenderManager/RenderManagerInterface'
import PaginationManagerInterface from '../../dist/Models/PaginationManager/PaginationManagerInterface'
import DensityManagerInterface from '../../dist/Models/DensityManager/DensityManagerInterface'
import ResetManagerInterface from '../../dist/Models/ResetManager/ResetManagerInterface'
import DataSelectorManagerInterface from '../../dist/Models/DataSelectorManager/DataSelectorManagerInterface'
import SortManagerInterface from '../../dist/Models/SortManager/SortManagerInterface'
describe('TableFacade', () => {
  const facade = new TableFacade()

  const columnManager = new ColumnManagerInterface()
  const render = new RenderManagerInterface()
  const pag = new PaginationManagerInterface()
  const density = new DensityManagerInterface()
  const reset = new ResetManagerInterface()
  const sort = new SortManagerInterface()
  const chooser = new DataSelectorManagerInterface()

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
    expect(facade.getRenderManager() instanceof RenderManagerInterface).toBe(true)
  })
  it('should return object of PaginationManagerInterface', () => {
    expect(facade.getPaginationManager() instanceof PaginationManagerInterface).toBe(true)
  })
  it('should return object of DensityManagerInterface', () => {
    expect(facade.getDensityManager() instanceof DensityManagerInterface).toBe(true)
  })
  it('should return object of ResetManagerInterface', () => {
    expect(facade.getResetManager() instanceof ResetManagerInterface).toBe(true)
  })
  it('should return object of SortManagerInterface', () => {
    expect(facade.getSortManager() instanceof SortManagerInterface).toBe(true)
  })
  it('should return object of DataSelectorManagerInterface', () => {
    expect(facade.getDataSelectorManager() instanceof DataSelectorManagerInterface).toBe(true)
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
