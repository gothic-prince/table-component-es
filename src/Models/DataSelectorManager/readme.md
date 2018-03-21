### Using:

```javascript
const selector = table.getDataSelectorManager()
selector.add(entities[1])
selector.add(entities[4])
selector.all(entities)
console.log(selector.isAllSelected(entities)) //true
selector.all(entities)
console.log(selector.isAllSelected(entities)) //false
const selectedEntities = selector.get()
console.log(selectedEntities)
```

### [DataSelectorManagerInterface](DataSelectorManagerInterface.js) and [DataSelectorManager](DataSelectorManager.js)

![DataSelectorManager](./DataSelectorManager.png)
