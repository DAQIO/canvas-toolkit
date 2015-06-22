import _ from 'underscore';
import Layer from './Layer';
import LayeredElement from './LayeredElement';
import CanvasElement from './CanvasElement';

class Canvas {
  constructor({width, height, container}){
    this.container = container;
    this.composites = [];
    this.defaultLayer = new Layer({width,height});
    this.container.appendChild(this.defaultLayer.canvasEl);
    this.width = width;
    this.height = height;

    const drawLoop = () => {
      this.defaultLayer.draw();
      _.each(this.composites, (composite)=>{
        composite.draw();
      });
      window.requestAnimationFrame(drawLoop);
    };

    window.requestAnimationFrame(drawLoop);
  }

  clear(){
    this.defaultLayer.clear();
    this.composites = [];
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
    this.container.appendChild(this.defaultLayer.canvasEl);
  }

  add(element){
    if(element instanceof LayeredElement){
      element.width = this.width;
      element.height = this.height;
      this.composites.push(element);
      _.each(element.layers, (layer) => {
        this.container.appendChild(layer.canvasEl);
      });
    } else if(element instanceof CanvasElement){
      this.defaultLayer.add(element);
    } else {
      throw "Unrecognized Element";
    }
  }

  get width(){
    return this._width;
  }

  get height(){
    return this._height;
  }

  set width(val){
    this._width = val;
    _.each(this.composites, (composite) => {
      composite.width = val;
    });
    this.defaultLayer.width = val;
  }

  set height(val){
    this._height = val;
    _.each(this.composites, (composite) => {
      composite.height = val;
    });
    this.defaultLayer.height = val;
  }
}

export default Canvas;
