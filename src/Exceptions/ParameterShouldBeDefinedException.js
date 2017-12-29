export default class ParameterShouldBeDefinedException extends Error {
  constructor(paramNumber) {
    super('Parameter(' + paramNumber + ') should be defined')
  }
}
