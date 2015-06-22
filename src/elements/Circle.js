import _ from 'underscore';
import CanvasElement from '../core/CanvasElement';
import {checkOptions, RedrawProperties} from '../core/util';

@RedrawProperties([
  'left', 'top', 'fill',
  'fillColor', 'stroke', 'strokeColor',
  'strokeThickness', 'radius',
  'angle'
])
class Circle extends CanvasElement {

  constructor(options){
    super(options);

    _.defaults(options, {
      fill: true,
      fillColor: '#000',
      stroke: true,
      strokeColor: '#000',
      strokeThickness: 0,
      radius: 10,
      rotate: 0,
      angle: 360
    });

    this.fill = options.fill;
    this.fillColor = options.fillColor;
    this.stroke = options.stroke;
    this.strokeColor = options.strokeColor;
    this.strokeThickness = options.strokeThickness;
    this.radius = options.radius;
    this.rotate = options.rotate;
    this.angle = options.angle;
  }

  draw(){
    this.canvas.translate(-this.radius/2, -this.radius/2);
    this.canvas.lineWidth = this.strokeThickness;
    this.canvas.strokeStyle = this.strokeColor;
    this.canvas.fillStyle = this.fillColor;

    this.canvas.beginPath();
    const angle = this.angle * (Math.PI/180);
    this.canvas.arc(this.radius/2, this.radius/2, this.radius, 0, angle, false);
    if(this.fill){
      this.canvas.fill();
    }
    if(this.stroke){
      this.canvas.stroke();
    }
    this.canvas.closePath();
  }

}

export default Circle;
