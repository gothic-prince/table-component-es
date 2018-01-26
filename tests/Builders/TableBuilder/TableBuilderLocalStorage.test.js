import TableBuilderLocalStorage from '../../../dist/Builders/TableBuilder/TableBuilderLocalStorage'
import StorageMock from 'storage-manager-es/dist/StorageMock'
import ColumnManagerInterface from '../../../dist/Models/ColumnManager/ColumnManagerInterface'
import { TABLE_BUILD_STORAGE } from '../../../dist/Builders/TableBuilder/constants'

describe('TableBuilderLocalStorage', () => {
  const columnManager = new ColumnManagerInterface()
  columnManager.createBodyColumns = () => []
  columnManager.getHeadColumns = () => []
  const storage = new StorageMock()
  let renderTimes = 0
  const builder = new TableBuilderLocalStorage(() => {
    renderTimes++
  }, columnManager, 'TestTable', storage)
  builder.buildDensityManager(TABLE_BUILD_STORAGE)
  const table = builder.getTableFacade()
  const KEY_NAME = 'TestTable__density'
  it('should return 3', () => {
    table.getDensityManager().setDensity(3)
    expect(table.getDensityManager().getDensity()).toBe(3)
    expect(storage.getData(KEY_NAME)).toBe(3)
  })
  it('should return 1', () => {
    table.getDensityManager().setDensity(1)
    expect(table.getDensityManager().getDensity()).toBe(1)
    expect(storage.getData(KEY_NAME)).toBe(1)
  })
  it('should return 2', () => {
    table.getDensityManager().setDensity(2)
    expect(table.getDensityManager().getDensity()).toBe(2)
    expect(storage.getData(KEY_NAME)).toBe(2)
  })
})
