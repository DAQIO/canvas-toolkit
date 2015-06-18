import CanvasElement from '../core/CanvasElement';

class Line extends CanvasElement {

  constructor(){
    super();
    this.x1 = options.x1;
    this.y1 = options.y1;
    this.x2 = options.x2;
    this.y2 = options.y2;
    this.color = options.color || '#000';
    this.lineCap = options.lineCap || 'square';
    this.dashed = options.dashed || false;
    this.dashSpacing = optiosn.dashSpacing || [10,5];
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
    this.canvas.lineWidth = this.height;
    this.canvas.strokeStyle = this.color;
    this.canvas.lineCap = this.lineCap;
    this.canvas.moveTo(this.x1, this.y1);
    this.canvas.lineTo(this.x2, this.y2);
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
    const di = 0;
    let draw = true;
    let x = 0;
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
