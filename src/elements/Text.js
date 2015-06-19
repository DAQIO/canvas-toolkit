import _ from 'underscore';
import CanvasElement from '../core/CanvasElement';
import {checkOptions, RedrawProperties} from '../core/util';
import {standardFont} from '../core/defaults';

@RedrawProperties([
  'font', 'text', 'color'
])
class Text extends CanvasElement {

  constructor(options){
    super(options);
    options = _.defaults(_.clone(options), {
      font: standardFont,
      color: '#000'
    });
    checkOptions(options, ['text']);
    this.font = options.font;
    this.text = options.text;
    this.color = options.color;
  }

  draw(){
    let {style,weight,size,family} = this.font;
    style = style || "normal";
    weight = weight || "normal";
    this.canvas.font = `${style} ${weight} ${size}px "${family}"`
    this.canvas.fillStyle = this.color;
    this.canvas.textAlign = 'left';
    this.canvas.textBaseline = 'top';
    this.canvas.fillText(this.text, this.left, this.top);
  }
}

export default Text;
