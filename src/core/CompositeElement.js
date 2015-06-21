import _ from 'underscore';
import Layer from './Layer';

class CompositeElement {

  constructor(){
    this.layers = [];
  }

  draw(){
    _.each(this.layers, (layer) => {
      layer.draw();
    });
  }

  createLayer(){
    const layer = new Layer({
      width:this.width,
      height:this.height
    });
    this.layers.push(layer);
    return layer;
  }

  get width(){
    return this._width;
  }

  get height(){
    return this._height;
  }

  set width(val){
    this._width = val;
    _.each(this.layers, (layer) => {
      layer.width = val;
    });
  }

  set height(val){
    this._height = val;
    _.each(this.layers, (layer) => {
      layer.height = val;
    });
  }
}

export default CompositeElement;
