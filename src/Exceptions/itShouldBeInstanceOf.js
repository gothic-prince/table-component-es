export default class itShouldBeInstanceOf extends Error {
  constructor(type, objectName = 'it') {
    super(objectName + ' should be instance of ' + type.name)
  }
}