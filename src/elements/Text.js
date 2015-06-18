import _ from 'underscore';
import CanvasElement from '../core/CanvasElement';
import {checkOptions} from '../core/util';
import {standardFont} from '../core/defaults';

class Text extends CanvasElement {

  constructor(options){
    super();
    options = _.defaults(_.clone(options), {
      left: 0,
      top: 0,
      font: standardFont,
      color: '#000'
    });
    checkOptions(options, ['text']);
    this.left = options.left;
    this.top = options.top;
    this.font = options.font;
    this.text = options.text;
    this.color = options.color;
  }

  draw(){
    const {style,weight,size,family} = this.font;
    this.canvas.font = `${style} ${weight} ${size}px "${family}"`
    this.canvas.fillStyle = this.color;
    this.canvas.textAlign = 'left';
    this.canvas.textBaseline = 'top';
    this.canvas.fillText(this.text, this.left, this.top);
  }

}

export default Text;
