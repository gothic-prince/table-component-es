import RenderInterface from './RenderInterface';
export default class RenderManager extends RenderInterface {
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
