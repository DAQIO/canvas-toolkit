import _ from 'underscore';
import CanvasElement from '../core/CanvasElement';
import {checkOptions, RedrawProperties} from '../core/util';
import {standardFont} from '../core/defaults';

const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

@RedrawProperties([
  'font', 'text'
])
class Text extends CanvasElement {

  constructor(options){
    super(options);
    options = _.defaults(_.clone(options), {
      font: standardFont
    });
    checkOptions(options, ['text']);
    this.font = options.font;
    this.text = options.text;
  }

  draw(){
    let {style,weight,size,family,color} = this.font;
    style = style || "normal";
    weight = weight || "normal";
    this.canvas.font = `${style} ${weight} ${size}px "${family}"`
    this.canvas.fillStyle = color;
    this.canvas.textAlign = 'left';
    this.canvas.textBaseline = 'top';
    const measurement = this.canvas.measureText(this.text);
    _.defaults(measurement, {width: 0, height: 0});
    if(isFirefox){
      this.canvas.fillText(this.text, - measurement.width / 2, size / 4);
    } else {
      this.canvas.fillText(this.text, - measurement.width / 2, - measurement.height / 2);
    }
  }
}

export default Text;
