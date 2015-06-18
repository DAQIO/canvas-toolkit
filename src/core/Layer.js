import _ from 'underscore';

class Layer {
  constructor({width, height}){
    this.width = width;
    this.height = height;
    this.elements = [];
    this.canvasEl = document.createElement('canvas');
    this.canvasEl.width = width;
    this.canvasEl.height = height;
    this.canvasEl.style.width = `${width}px`;
    this.canvasEl.style.height = `${height}px`;
    this.canvas = this.canvasEl.getContext('2d');
  }

  add(element){
    this.elements.push(element);
  }

  draw(){
    if(this._elementsAreDirty()){
      console.log("REDRAW");
      this.canvas.clearRect(0,0,this.width,this.height);
      _.each(this.elements, (element)=>{
        element.drawTo(this.canvas);
      });
    }
  }

  _elementsAreDirty(){
    return _.any(this.elements, (el) => {
      return el.isDirty;
    });
  }
}

export default Layer;
