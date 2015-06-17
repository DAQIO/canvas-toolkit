import CanvasElement from './CanvasElement';

class Rectangle extends CanvasElement {
  constructor(options){
    super();
    this.color = options.color || '#000';
  }
}
