import DensityManagerInterface from './DensityManagerInterface'
export default class DensityManager extends DensityManagerInterface {
  /**
   * @param table {RenderManagerInterface}
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
