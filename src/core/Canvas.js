import _ from 'underscore';
import Layer from './Layer';
import CompositeElement from './CompositeElement';

class Canvas {
  constructor({width, height, container}){
    this.width = width;
    this.height = height;
    this.container = container;
    this.composites = [];
    this.defaultLayer = new Layer({width,height});
    this.container.appendChild(this.defaultLayer.canvasEl);

    const drawLoop = () => {
      this.defaultLayer.draw();
      _.each(this.composites, (composite)=>{
        _.each(composite.layers, (layer) => {
          layer.draw();
        });
      })
      window.requestAnimationFrame(drawLoop);
    };

    window.requestAnimationFrame(drawLoop);
  }

  add(element){
    if(element instanceof CompositeElement){
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
}

export default Canvas;
