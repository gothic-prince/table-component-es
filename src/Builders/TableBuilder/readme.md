### Example:

```javascript
  const onRender = () => {
    // ...code ...
  }
  const builder = new TableBuilder(onRender)
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

```
### See more about:
[TableBuilderInterface](../../Facades/TableFacadeInterface.js),
[TableBuilderAbstract](../../Facades/TableFacadeAbstract.js)
and
[TableBuilder](../../Facades/TableFacade.js)


![TableFacade.png](./TableBuilder.png)

