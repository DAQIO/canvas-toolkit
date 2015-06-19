import _ from 'underscore';
import {Text, Canvas, Line, Rectangle} from '.';

function randomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

class Examples {
  constructor(){
    this.canvas = new Canvas({
      width: 750,
      height: 500,
      container: document.querySelector("#canvas")
    });
  }

  countTest(){
    const counter = new Text({
      left: 100,
      top: 100,
      text: 'Count: 0',
      color: 'red',
      font: {
        family: 'DejaVu Sans Mono',
        size: 44
      }
    });
    this.canvas.add(counter);
    let count = 0;
    setInterval(() => {
      counter.text = 'Count: ' + (count++);
    },10);
  }

  multipleElements(){
    const c1 = new Text({
      text: 'Counter 1: 0',
      left: 10,
      top: 10
    });
    const c2 = new Text({
      text: 'Counter 2: 0',
      left: 10,
      top: 30
    });
    this.canvas.add(c1);
    this.canvas.add(c2);
    let count1 = 0;
    let count2 = 0;
    setInterval(() => {
      c1.text = "Counter 1: " + (count1++);
    }, 100);
    setInterval(() => {
      c2.text = "Counter 2: " + (count2++);
    }, 10);
  }

  lineTest(){
    const backbone = new Line({
      top: 50,
      left: -50,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 400,
      color: '#a7c'
    });
    this.canvas.add(backbone);

    const lines = [];
    for(let i = 0; i < 100; i++){
      lines.push(new Line({
        top: 50 + 400 * Math.random(),
        left: -50,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 500
      }));
    }

    _.each(lines, (line) => {
      line.rotator = 0;
      this.canvas.add(line);
    });

    setInterval(() => {
      backbone.x1 = (backbone.x1 + 0.5) % (this.canvas.width + 100);
      backbone.x2 = backbone.x1;
      _.each(lines, (line) => {
        line.rotator += Math.random() * 0.02;
        line.x1 = (line.x1 + 0.5) % (this.canvas.width + 100);
        line.x2 = Math.cos(line.rotator) * 100 + line.x1;
        line.y2 = Math.sin(line.rotator) * 100;
      });
    }, 10);
    setInterval(() => {
      _.each(lines, (line) => {
        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);
        line.color = 'rgb('+red+','+green+','+blue+')';
      });
    },1000)
  }

  dashedLine(){
    const dashedLine = new Line({
      left: 100,
      top: 100,
      x1: 0,
      y1: 0,
      x2: 500,
      y2: 500,
      dashed: true
    });
    this.canvas.add(dashedLine);

    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let d1 = 10;
    let d2 = 5;

    setInterval(function(){
      dashedLine.color = 'rgb('+red+','+green+','+blue+')';
      red = (red + 1) % 255;
      green = (green + 2) % 255;
      blue = (blue + 3) % 255;
      dashedLine.thickness += 0.1;
      dashedLine.dashSpacing = [d1,d2];
      d1 += 0.1;
      d2 += 0.1;
    }, 50);
  }

  manyRectangles(){
    const rects = [];
    for(let i = 0; i < 100; i++){
      let fill = false;
      let stroke = false;
      if(Math.random() > 0.9){
        fill = true;
        stroke = true;
      } else if(Math.random() > 0.75){
        fill = false;
        stroke = true;
      } else {
        fill = true;
      }
      const rect = new Rectangle({
        left: Math.random() * 750,
        top: Math.random() * 400,
        width: Math.random() * 50 + 10,
        height: Math.random() * 25 + 10,
        fill: fill,
        fillColor: randomColor(),
        stroke: true,
        strokeColor: randomColor(),
        strokeThickness: Math.random() * 10
      });
      rects.push(rect);
      this.canvas.add(rect);
    }
    setInterval(()=>{
      _.each(rects, (rect) => {
        rect.left += 1;
        rect.left = rect.left % this.canvas.width;
      });
    }, 20);
  }
}

window.addEventListener('load', function(){
  var examples = new Examples();
  examples.manyRectangles();
});
