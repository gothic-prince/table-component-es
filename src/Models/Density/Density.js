import DensityInterface from './DensityInterface';
export default class Density extends DensityInterface {
  /**
   * @param table {RenderInterface}
   * @param density {Number}
   */
  constructor(table, density = 2) {
    super()
    this.table = table
    this.density = density
  }
  setDensity(density) {
    this.density = density
    this.table.reRenderView()
  }
  getDensity() {
    return this.density
  }
}
