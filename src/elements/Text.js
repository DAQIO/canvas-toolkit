import CanvasElement from '../core/CanvasElement';

class Text extends CanvasElement {

  constructor(options){
    super();
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
    this.canvas.textAlign = 'center';
    this.canvas.fillText(this.text, this.left, this.top);
  }

}

export default Text;
