import RenderManagerInterface from './RenderManagerInterface'
export default class RenderManager extends RenderManagerInterface {
  /**
   * @param onRender {Function}
   */
  constructor(onRender = null) {
    super()
    /**
     * @type {Function[]}
     * @private
     */
    this._events = []
    if (onRender !== null) {
      this.addEvent(onRender)
    }
  }
  reRenderView() {
    this._events.map((event) => {
      event()
    })
  }
  addEvent (onRender) {
    this._events.push(onRender)
  }
}
