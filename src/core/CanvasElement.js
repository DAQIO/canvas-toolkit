import _ from 'underscore';
import {RedrawProperties} from './util';

@RedrawProperties([
  'left', 'top','width','height','rotate'
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
    this.rotate = options.rotate;
    this.children = [];
  }

  draw(){
    _.each(this.children, (child) => {
      this.canvas.save();
      child.drawTo(this.canvas);
      this.canvas.restore();
    });
  }

  drawTo(canvas){
    this.canvas = canvas;
    this.canvas.save();
    this.canvas.translate(this.left, this.top);
    if(this.rotate != 0){
      this.canvas.rotate((Math.PI/180)*this.rotate);
    }
    this.draw(canvas);
    this.canvas.restore();
    this.canvas = undefined;
    this.isDirty = false;
  }

  addChild(element){
    this.children.push(element);
  }

  get isDirty(){
    return this._isDirty || _.any(this.children, (child) => {
      return child.isDirty;
    });
  }

  set isDirty(value){
    this._isDirty = value;
  }

}

export default CanvasElement;
