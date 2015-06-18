class CanvasElement {
  constructor(){
    this.isDirty = true;
  }

  drawTo(canvas){
    this.canvas = canvas;
    this.draw(canvas);
    this.canvas = undefined;
    this.isDirty = false;
  }
}

export default CanvasElement;
