import DensityInterface from './DensityInterface';
export default class Density extends DensityInterface {
  /**
   * @param table {RenderInterface}
   * @param density {Number}
   * @param handle {Function}
   */
  constructor(table, density = 2, handle = null) {
    super()
    this.table = table
    this.handle = handle
    this.density = density
  }
  setDensity(density) {
    this.density = density
    if (this.handle !== null) {
      this.handle(density)
    }
    this.table.reRenderView()
  }
  getDensity() {
    return this.density
  }
}
