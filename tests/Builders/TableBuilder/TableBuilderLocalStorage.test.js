import TableBuilderLocalStorage from '../../../dist/Builders/TableBuilder/TableBuilderLocalStorage'
import StorageMock from 'storage-manager-es/dist/StorageMock'
import { TABLE_BUILD_STORAGE } from '../../../dist/Builders/TableBuilder/constants'

describe('TableBuilderLocalStorage', () => {
  const storage = new StorageMock()
  let renderTimes = 0
  const builder = new TableBuilderLocalStorage(() => {
    renderTimes++
  }, 'TestTable', storage)

  builder.buildColumnManager(
    builder.getFactory()
      .addHeader('name')
      .addHeader('phone')
      .getHeaders(),
    (entity) => builder.getFactory()
      .addBody('name', entity.name)
      .addBody('phone', entity.phone)
      .getBodies()
  )
  builder.buildDensityManager(TABLE_BUILD_STORAGE)
  const table = builder.getTableFacade()
  const KEY_NAME = 'TestTable__density'
  const entity = {name: 'Alex', phone: '23746234'}
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

  it('should return "name"',() => {
    expect(table.getColumnManager().getHeadColumns()[0].getFieldName()).toBe('name')
  })
  it('should return "phone"',() => {
    expect(table.getColumnManager().getHeadColumns()[1].getFieldName()).toBe('phone')
  })
  it('should return "Alex"',() => {
    expect(table.getColumnManager().createBodyColumns(entity)[0].getRawValue()).toBe('Alex')
  })
  it('should return "23746234"',() => {
    expect(table.getColumnManager().createBodyColumns(entity)[1].getRawValue()).toBe('23746234')
  })
})
