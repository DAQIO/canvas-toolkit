import CanvasElement from '../core/CanvasElement';

class Rectangle extends CanvasElement {
  constructor(options){
    super();
    this.left = options.left;
    this.top = options.top;
    this.width = options.width;
    this.height = options.height;
    this.color = options.color || '#000';
    this.thickness = options.thickness || 1;
    this.fill = options.fill || false;
    this.fillColor = options.fillColor || '#FFF';
  }

  draw(){
    const left = this.left - this.thickness / 2;
    const top = this.top - this.thickness / 2;
    const width = this.width + this.thickness;
    const right = left + width;
    const bottom = top + this.height + this.thickness;

    this.canvas.beginPath();
    this.canvas.moveTo(left, top);
    this.canvas.lineTo(right, top);
    this.canvas.lineTo(right, bottom);
    this.canvas.lineTo(left, bottom);
    this.canvas.lineTo(left, top);
    this.canvas.lineWidth = this.thickness;
    this.canvas.strokeStyle = this.color;
    this.canvas.closePath();
    this.canvas.stroke();
  }
}

export default Rectangle;
