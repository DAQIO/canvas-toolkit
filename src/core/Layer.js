import _ from 'underscore';

class Layer {
  constructor({width, height}){
    this.canvasEl = document.createElement('canvas');
    this.width = width;
    this.height = height;
    this.elements = [];
    this.canvas = this.canvasEl.getContext('2d');
    this.canvasEl.style.position = 'absolute';
    this.canvasEl.style.left = this.left + 'px';
    this.canvasEl.style.top = this.top + 'px';
  }

  add(element){
    this.elements.push(element);
  }

  clear(){
    this.elements = [];
    this.canvas.clearRect(0,0,this.width, this.height);
  }

  draw(){
    if(this._elementsAreDirty()){
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

  get width(){
    return this._width;
  }

  get height(){
    return this._height;
  }

  set width(val){
    this._width = val;
    this._refreshCanvas();
  }

  set height(val){
    this._height = val;
    this._refreshCanvas();
  }

  _refreshCanvas(){
    this.canvasEl.width = this._width;
    this.canvasEl.height = this._height;
    this.canvasEl.style.width = `${this._width}px`;
    this.canvasEl.style.height = `${this._height}px`;
  }
}

export default Layer;
