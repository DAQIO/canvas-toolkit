import _ from 'underscore';
import CanvasElement from '../core/CanvasElement';
import {RedrawProperties} from '../core/util';

@RedrawProperties([
  'stroke', 'strokeColor', 'strokeThickness',
  'fill','fillColor'
])
class Rectangle extends CanvasElement {
  constructor(options){
    super(options);

    _.defaults(options, {
      fill: true,
      fillColor: '#000',
      stroke: true,
      strokeColor: '#000',
      strokeThickness: 0
    });

    this.fill = options.fill;
    this.fillColor = options.fillColor;

    this.stroke = options.stroke;
    this.strokeColor = options.strokeColor;
    this.strokeThickness = options.strokeThickness;
  }

  draw(){
    console.log("Draw Rectangle", this.left, this.top);
    const left = this.strokeThickness / 2;
    const top = this.strokeThickness / 2;
    const width = this.width - this.strokeThickness;
    const right = left + width;
    const bottom = top + this.height - this.strokeThickness;

    this.canvas.beginPath();
    this.canvas.moveTo(left, top);
    this.canvas.lineTo(right, top);
    this.canvas.lineTo(right, bottom);
    this.canvas.lineTo(left, bottom);
    this.canvas.lineTo(left, top);
    this.canvas.lineWidth = this.strokeThickness;
    this.canvas.strokeStyle = this.strokeColor;
    this.canvas.fillStyle = this.fillColor;
    this.canvas.closePath();
    if(this.fill){
      this.canvas.fill();
    }
    if(this.stroke){
      this.canvas.stroke();
    }

  }
}

export default Rectangle;
