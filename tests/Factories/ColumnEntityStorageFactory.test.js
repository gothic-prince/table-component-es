import ColumnEntityStorageFactory,
  {
    SORT,
    REVERSE,
    ACTIVE,
    HIDDEN,
    HIDEABLE,
    WIDTH
  } from '../../dist/Factories/ColumnEntityStorageFactory'
import StorageMock from 'storage-manager-es/dist/StorageMock'
describe('ColumnEntityStorageFactory', () => {
  const TABLE_NAME = 'testTable'
  const storage = new StorageMock()
  const factory = new ColumnEntityStorageFactory(TABLE_NAME, [HIDDEN, ACTIVE, WIDTH], storage)
  describe('Hidden and active', () => {
    const columns = factory.addHeader('name').getHeaders()
    const entity = columns[0]

    it('should return true', () => {
      entity.setHidden(true)
      expect(storage.getData(entity.getKeyName(HIDDEN))).toBe(true)
    })
    it('should return true', () => {
      expect(entity.isHidden()).toBe(true)
    })
    it('should return false', () => {
      entity.setHidden(false)
      expect(storage.getData(entity.getKeyName(HIDDEN))).toBe(false)
    })
    it('should return false', () => {
      expect(entity.isHidden()).toBe(false)
    })
    it('should return null', () => {
      expect(entity.getWidth()).toBe(null)
    })
    it('should return 100', () => {
      entity.setWidth(100)
      expect(entity.getWidth()).toBe(100)
    })
    it('should return 100', () => {
      expect(storage.getData(entity.getKeyName(WIDTH))).toBe(100)
    })
    it('should return null', () => {
      entity.setHideable(false)
      expect(storage.getData(entity.getKeyName(HIDEABLE))).toBe(null)
    })
    it('should return false', () => {
      expect(entity.isHideable()).toBe(false)
    })

    it('should return null', () => {
      entity.setHideable(true)
      expect(storage.getData(entity.getKeyName(HIDEABLE))).toBe(null)
    })
    it('should return true', () => {
      expect(entity.isHideable()).toBe(true)
    })

    it('should return true', () => {
      entity.setActive(true)
      expect(storage.getData(entity.getKeyName(ACTIVE))).toBe(true)
    })
    it('should return true', () => {
      expect(entity.isActive()).toBe(true)
    })

    it('should return false', () => {
      entity.setActive(false)
      expect(storage.getData(entity.getKeyName(ACTIVE))).toBe(false)
    })
    it('should return false', () => {
      expect(entity.isActive()).toBe(false)
    })

    it('should return null', () => {
      entity.setNeedSort(false)
      expect(storage.getData(entity.getKeyName(SORT))).toBe(null)
    })
    it('should return false', () => {
      expect(entity.needSort()).toBe(false)
    })

    it('should return null', () => {
      entity.setNeedSort(true)
      expect(storage.getData(entity.getKeyName(SORT))).toBe(null)
    })
    it('should return true', () => {
      expect(entity.needSort()).toBe(true)
    })
  })
})
