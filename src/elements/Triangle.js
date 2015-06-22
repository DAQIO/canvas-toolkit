import _ from 'underscore';
import CanvasElement from '../core/CanvasElement';
import {RedrawProperties} from '../core/util';

@RedrawProperties([
  'stroke', 'strokeColor', 'strokeThickness',
  'fill','fillColor', 'rotate'
])
class Triangle extends CanvasElement {
  constructor(options){
    super(options);

    _.defaults(options, {
      fill: true,
      fillColor: '#000',
      stroke: true,
      strokeColor: '#000',
      strokeThickness: 0,
      rotate: 180
    });

    this.fill = options.fill;
    this.fillColor = options.fillColor;

    this.stroke = options.stroke;
    this.strokeColor = options.strokeColor;
    this.strokeThickness = options.strokeThickness;
    this.rotate = options.rotate;
  }

  draw(){
    this.canvas.translate(this.left, this.top);
    if(this.rotate != 0){
      this.canvas.rotate((Math.PI/180)*this.rotate);
    }
    this.canvas.translate(-this.width/2, -this.height/2);
    this.canvas.fillStyle = this.fillColor;
    this.canvas.strokeStyle = this.strokeColor;
    this.canvas.lineWidth = this.strokeThickness;
    this.canvas.beginPath();
    this.canvas.moveTo(this.strokeThickness/2, this.strokeThickness/2);
    this.canvas.lineTo(this.width-this.strokeThickness/2, this.strokeThickness/2);
    this.canvas.lineTo(this.width/2, this.height-this.strokeThickness/2);
    this.canvas.closePath();
    if(this.fill){
      this.canvas.fill();
    }
    if(this.stroke){
      this.canvas.stroke();
    }

  }
}

export default Triangle;
