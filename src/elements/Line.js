import CanvasElement from '../core/CanvasElement';
import {checkOptions} from '../core/util';

class Line extends CanvasElement {

  constructor(options){
    super(options);

    checkOptions(options, ['x1','y1', 'x2', 'y2']);

    this.x1 = options.x1;
    this.y1 = options.y1;
    this.x2 = options.x2;
    this.y2 = options.y2;

    this.color = options.color || '#000';
    this.lineCap = options.lineCap || 'square';
    this.dashed = options.dashed || false;
    this.dashSpacing = options.dashSpacing || [10,5];
    this.thickness = options.thickness || 1;
  }

  get x1(){
    return this._x1;
  }

  set x1(x1){
    this._x1 = x1;
    this.isDirty = true;
  }

  get x2(){
    return this._x2;
  }

  set x2(x2){
    this._x2 = x2;
    this.isDirty = true;
  }

  get y1(){
    return this._y1;
  }

  set y1(y1){
    this._y1 = y1;
    this.isDirty = true;
  }

  get y2(){
    return this._y2;
  }

  set y2(y2){
    this._y2 = y2;
    this.isDirty = true;
  }

  draw(){
    if(this.dashed){
      this._drawDashedLine();
    } else {
      this._drawRegularLine();
    }
  }

  _drawRegularLine(){
    this.canvas.beginPath();
    this.canvas.lineWidth = this.thickness;
    this.canvas.strokeStyle = this.color;
    this.canvas.lineCap = this.lineCap;
    this.canvas.moveTo(this.x1 + this.left, this.y1 + this.top);
    this.canvas.lineTo(this.x2 + this.left, this.y2 + this.top);
    this.canvas.stroke();
  }

  _drawDashedLine(){
    this._dashedLine(this.x1, this.y1, this.x2, this.y2, this.dashSpacing);
  }

  //Draw a dashed line onto the current context.
  //http://stackoverflow.com/questions/4576724/dotted-stroke-in-canvas
  // this.param x {Number} start x position
  // this.param y {Number} start y position
  // this.param x2 {Number} end x position
  // this.param y2 {Number} end y position
  // this.param da {Array} an array of two values. The first value is how long of a dash to draw,
  // the second is how much space before the next dash.
  _dashedLine(x, y, x2, y2, da){
    if(!da){
      da = [10,5];
    }
    this.ctx.save();
    const dx = (x2-x);
    const dy = (y2-y);
    const len = Math.sqrt(dx*dx + dy*dy);
    const rot = Math.atan2(dy, dx);
    this.ctx.translate(x, y);
    this.ctx.moveTo(0, 0);
    this.ctx.rotate(rot);
    this.ctx.beginPath();
    const dc = da.length;
    let di = 0;
    let draw = true;
    x = 0;
    while (len > x){
      x += da[di++ % dc];
      if (x > len){
        x = len;
      }
      if(draw){
        this.ctx.lineTo(x, 0);
      } else {
        this.ctx.moveTo(x, 0);
      }
      draw = !draw;
    }
    this.ctx.restore();
  }
}

export default Line;
