import _ from 'underscore';
import CanvasElement from '../core/CanvasElement';
import {checkOptions, RedrawProperties} from '../core/util';

@RedrawProperties([
  'left', 'top','fill',
  'fillColor', 'stroke', 'strokeColor',
  'strokeThickness', 'rotate', 'path'
])
class Path extends CanvasElement {

  constructor(options){
    super(options);

    _.defaults(options, {
      fill: true,
      fillColor: '#000',
      stroke: true,
      strokeColor: '#000',
      strokeThickness: 0,
      rotate: 0
    });

    this.fill = options.fill;
    this.fillColor = options.fillColor;
    this.stroke = options.stroke;
    this.strokeColor = options.strokeColor;
    this.strokeThickness = options.strokeThickness;
    this.rotate = options.rotate;
    this.path = options.path;
  }

  draw(){
    this.canvas.translate(this.left, this.top);
    if(this.rotate != 0){
      this.canvas.rotate((Math.PI/180)*this.rotate);
    }
    this.canvas.lineWidth = this.strokeThickness;
    this.canvas.strokeStyle = this.strokeColor;
    this.canvas.fillStyle = this.fillColor;

    _.each(this.path, (path) => {
      this.canvas.beginPath();
      const position = path[0];
      this.canvas.moveTo(position[0], position[1]);
      for(let i = 1; i < path.length; i++){
        this.canvas.lineTo(path[i][0], path[i][1]);
      }
      if(this.fill){
        this.canvas.fill();
      }
      if(this.stroke){
        this.canvas.stroke();
      }
      this.canvas.closePath();

    });

  }
}

export default Path;
