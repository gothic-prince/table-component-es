### Introduction:

This package was created to separate Views and Models. 

### Solutions: 
* You can use one model to create table for any frameworks. It can solve issue to supporting application with a few frameworks (like React and React Native). 
* Simple testing.
* Simple extending. You can add or edit behavior. 
* You can override models so, to it keep settings of table.

### Example:

```javascript
table.getSortManager().by('name', TABLE_SORT_ASC)
table.getDensityManager().setDensity(3)
table.getPaginationManager().setCurrentPage(34)
table.getPaginationManager().next(entities)

// it returns sorted, filtered, paginated entities, 
table.getEntities(entities)
```

### Models:
[TableBuilder](https://github.com/ui-package/table-component/blob/master/src/Builders/TableBuilder/readme.md)

[Sort](https://github.com/ui-package/table-component/blob/master/src/Models/Sort/readme.md)

[PaginationManager](https://github.com/ui-package/table-component/blob/master/src/Models/Pagination/readme.md)

[DensityManager](https://github.com/ui-package/table-component/blob/master/src/Models/Density/readme.md)

[DataSelectorManager](https://github.com/ui-package/table-component/blob/master/src/Models/Chosen/readme.md)

[ResetManager](https://github.com/ui-package/table-component/blob/master/src/Models/Reset/readme.md)

[Render](https://github.com/ui-package/table-component/blob/master/src/Models/Render/readme.md)

