import DensityManagerWithStorage from '../../../dist/Models/DensityManager/DensityManagerWithStorage';
import StorageMock from 'storage-manager-es/dist/StorageMock';
import RenderManagerInterface from '../../../dist/Models/RenderManager/RenderManagerInterface';
describe('DensityManagerWithStorage', () => {
  const table = new RenderManagerInterface()
  const TABLE_NAME = 'test_table'
  const storage = new StorageMock()
  table.reRenderView = () => {}

  const density = new DensityManagerWithStorage(table, storage, TABLE_NAME, 3)
  it('shoulr return 3', () => {
    expect(density.getDensity()).toBe(3)
  })
  it('should return 3', () => {
    expect(storage.getData('test_table__density')).toBe(3)
  })
  it('shoulr return 1', () => {
    density.setDensity(1)
    expect(density.getDensity()).toBe(1)
  })
  it('shoulr return 1', () => {
    expect(storage.getData('test_table__density')).toBe(1)
  })
})
