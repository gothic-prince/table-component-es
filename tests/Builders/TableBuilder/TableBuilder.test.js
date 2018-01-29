import TableBuilder from '../../../dist/Builders/TableBuilder/TableBuilder';
describe('TableBuilder', () => {
  let renderTimes = 0
  const builder = new TableBuilder(() => {
    renderTimes++
  })
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

  const table = builder.getTableFacade()
  const entity = {name: 'Alex', phone: '23746234'}
  it('should return false',() => {
    expect(table.getColumnManager() === null).toBe(false)
  })
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
    table.getDataSelectorManager().set([])
    expect(renderTimes).toBe(5)
  })
  it('should return 6',() => {
    table.getRenderManager().reRenderView()
    expect(renderTimes).toBe(6)
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
