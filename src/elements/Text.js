import _ from 'underscore';
import CanvasElement from '../core/CanvasElement';
import {checkOptions} from '../core/util';
import {standardFont} from '../core/defaults';

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
    const {style,weight,size,family} = this.font;
    this.canvas.font = `${style} ${weight} ${size}px "${family}"`
    this.canvas.fillStyle = this.color;
    this.canvas.textAlign = 'left';
    this.canvas.textBaseline = 'top';
    this.canvas.fillText(this.text, this.left, this.top);
  }

  set font(font){
    this._font = font;
    this.isDirty = true;
  }

  get font(){
    return this._font;
  }

  set text(content){
    this._text = content;
    this.isDirty = true;
  }

  get text() {
    return this._text;
  }

  set color(color){
    this._color = color;
    this.isDirty = true;
  }

  get color(){
    return this._color;
  }

}

export default Text;
