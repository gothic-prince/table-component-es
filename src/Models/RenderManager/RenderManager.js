import RenderManagerInterface from './RenderManagerInterface'
export default class RenderManager extends RenderManagerInterface {
  /**
   * @param onRender {Function}
   */
  constructor(onRender) {
    super()
    this._onRender = onRender
  }
  reRenderView() {
    this._onRender()
  }
}
