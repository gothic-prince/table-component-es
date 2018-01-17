### Example:

```javascript
const selector = table.getDataSelectorManager()
selector.add(entities[1])
selector.add(entities[4])
const selectedEntities = selector.get()
console.log(selectedEntities)
```

## [DataSelectorManagerInterface](DataSelectorManagerInterface.js) and [DataSelectorManager](DataSelectorManager.js)

### Methods:

| Name | Params | Return |
| --- | --- | --- |
| add | T | void |
| set | T[] | void |
| get | | T[] | 
| isChosen | T | Boolean | 


![DataSelectorManager](./DataSelectorManager.png)
