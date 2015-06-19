import _ from 'underscore';
import {RedrawProperties} from './util';

@RedrawProperties([
  'left', 'top','width','height'
])
class CanvasElement {

  constructor(options){
    options = _.defaults(options || {}, {
      left: 0,
      top: 0
    });
    this.isDirty = true;
    this.left = options.left;
    this.top = options.top;
    this.width = options.width;
    this.height = options.height;
  }

  drawTo(canvas){
    this.canvas = canvas;
    this.canvas.save();
    this.draw(canvas);
    this.canvas.restore();
    this.canvas = undefined;
    this.isDirty = false;
  }

}

export default CanvasElement;
