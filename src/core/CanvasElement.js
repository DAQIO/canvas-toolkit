import _ from 'underscore';

class CanvasElement {
  constructor(options){
    options = _.defaults(options || {}, {
      left: 0,
      top: 0
    });
    this.isDirty = true;
    this.left = options.left;
    this.top = options.top;
  }

  drawTo(canvas){
    this.canvas = canvas;
    this.draw(canvas);
    this.canvas = undefined;
    this.isDirty = false;
  }

  set left(coordinate){
    this._left = coordinate;
    this.isDirty = true;
  }

  get left(){
    return this._left;
  }

  set top(coordinate){
    this._top = coordinate;
    this.isDirty = true;
  }

  get top(){
    return this._top;
  }

}

export default CanvasElement;
