export default class itShouldBeFunctionAndReturnsInstanceOf extends Error{
  constructor(returnType) {
    super('it should be function and it returns instance of ' + returnType.name)
  }
}