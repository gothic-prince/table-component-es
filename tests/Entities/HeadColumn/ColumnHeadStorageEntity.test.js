import ColumnHeadStorageEntity from '../../../dist/Entities/HeadColumn/ColumnHeadStorageEntity'
import {
  COLUMN_STORAGE_HIDDEN,
  COLUMN_STORAGE_HIDEABLE,
  COLUMN_STORAGE_ACTIVE,
  COLUMN_STORAGE_NEED_SORT,
} from '../../../dist/Entities/HeadColumn/constants'
import StorageMock from 'storage-manager-es/dist/StorageMock'
describe('ColumnHeadStorageEntity', () => {
  const TABLE_NAME = 'testTable'
  describe('Storage: Only hidden', () => {
    const storage = new StorageMock()
    const entity = new ColumnHeadStorageEntity('name')
    entity.setStorage(TABLE_NAME, [COLUMN_STORAGE_HIDDEN], storage)

    it('should return false', () => {
      expect(entity.isHidden()).toBe(false)
    })
    it('should return "true"', () => {
      entity.setHidden('true')
      expect(storage.getData(entity.getKeyName(COLUMN_STORAGE_HIDDEN))).toBe('true')
    })
    it('should return true', () => {
      expect(entity.isHidden()).toBe(true)
    })
    it('should return false', () => {
      entity.setHidden(false)
      expect(storage.getData(entity.getKeyName(COLUMN_STORAGE_HIDDEN))).toBe(false)
    })
    it('should return false', () => {
      expect(entity.isHidden()).toBe(false)
    })

    it('should return null', () => {
      entity.setHideable(false)
      expect(storage.getData(entity.getKeyName(COLUMN_STORAGE_HIDEABLE))).toBe(null)
    })
    it('should return false', () => {
      expect(entity.isHideable()).toBe(false)
    })

    it('should return null', () => {
      entity.setHideable(true)
      expect(storage.getData(entity.getKeyName(COLUMN_STORAGE_HIDEABLE))).toBe(null)
    })
    it('should return true', () => {
      expect(entity.isHideable()).toBe(true)
    })

    it('should return null', () => {
      entity.setActive(true)
      expect(storage.getData(entity.getKeyName(COLUMN_STORAGE_ACTIVE))).toBe(null)
    })
    it('should return true', () => {
      expect(entity.isActive()).toBe(true)
    })

    it('should return null', () => {
      entity.setActive(false)
      expect(storage.getData(entity.getKeyName(COLUMN_STORAGE_ACTIVE))).toBe(null)
    })
    it('should return false', () => {
      expect(entity.isActive()).toBe(false)
    })

    it('should return null', () => {
      entity.setNeedSort(false)
      expect(storage.getData(entity.getKeyName(COLUMN_STORAGE_NEED_SORT))).toBe(null)
    })
    it('should return false', () => {
      expect(entity.needSort()).toBe(false)
    })

    it('should return null', () => {
      entity.setNeedSort(true)
      expect(storage.getData(entity.getKeyName(COLUMN_STORAGE_NEED_SORT))).toBe(null)
    })
    it('should return true', () => {
      expect(entity.needSort()).toBe(true)
    })
  })
})
