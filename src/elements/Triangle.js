

class Triangle extends CanvasElement {
  constructor(options){
    super(options);
    this.color = options.color || '#000';
    this.inverted = options.inverted || false;
  }

  draw(){
    this.canvas.fillStyle = this.color;
    this.canvas.beginPath();
    if(this.inverted){
      this.canvas.rotate((Math.PI/180)*180);
    }
    this.canvas.moveTo(x,y);
    this.canvas.lineTo(x-this.width/2, y-this.height/2);
    this.canvas.lineTo(x+this.width/2, y-this.height/2);
    this.canvas.closePath();
    this.canvas.fill();
  }
}
