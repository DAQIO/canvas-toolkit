import _ from 'underscore';
import Layer from './Layer';

class Canvas {
  constructor({width, height, container}){
    this.width = width;
    this.height = height;
    this.container = container;
    this.defaultLayer = new Layer({width,height});
    this.container.appendChild(this.defaultLayer.canvasEl);

    const drawLoop = () => {
      this.defaultLayer.draw();
      window.requestAnimationFrame(drawLoop);
    };

    window.requestAnimationFrame(drawLoop);    
  }

  add(element){
    this.defaultLayer.add(element);
  }
}

export default Canvas;
