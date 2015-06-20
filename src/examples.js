import _ from 'underscore';
import {Text, Canvas, Line, Rectangle, Triangle, Path, Circle, CompositeElement} from '.';

function randomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

class Examples extends CompositeElement {
  constructor(){
    super();
    this._createCountTest();
    this._createMultipleElements();
    this._createLineTest();
    this._createDashedLine();
    this._createManyRectangles();
    this._createOneTriangle();
    this._createManyTriangles();
    this._createManyPaths();
    this._createManyCircles();
    this._createProgressSemiCircle();
    this._createSpinningSemiCircle();
  }

  _createCountTest(){
    const layer = this.createLayer();
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
    layer.add(counter);
    let count = 0;
    setInterval(() => {
      counter.text = 'Count: ' + (count++);
    },10);
  }

  _createMultipleElements(){
    const layer = this.createLayer();
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
    layer.add(c1);
    layer.add(c2);
    let count1 = 0;
    let count2 = 0;
    setInterval(() => {
      c1.text = "Counter 1: " + (count1++);
    }, 100);
    setInterval(() => {
      c2.text = "Counter 2: " + (count2++);
    }, 10);
  }

  _createLineTest(){
    const layer = this.createLayer();
    const backbone = new Line({
      top: 50,
      left: -50,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 400,
      color: '#a7c'
    });
    layer.add(backbone);

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
      layer.add(line);
    });

    setInterval(() => {
      backbone.x1 = (backbone.x1 + 0.5) % (this.width + 100);
      backbone.x2 = backbone.x1;
      _.each(lines, (line) => {
        line.rotator += Math.random() * 0.02;
        line.x1 = (line.x1 + 0.5) % (this.width + 100);
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

  _createDashedLine(){
    const layer = this.createLayer();
    const dashedLine = new Line({
      left: 100,
      top: 100,
      x1: 0,
      y1: 0,
      x2: 500,
      y2: 500,
      dashed: true
    });
    layer.add(dashedLine);

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

  _createManyRectangles(){
    const layer = this.createLayer();
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
      layer.add(rect);
    }
    setInterval(()=>{
      _.each(rects, (rect) => {
        rect.left += 1;
        rect.left = rect.left % this.width;
      });
    }, 20);
  }

  _createOneTriangle(){
    const layer = this.createLayer();
    const triangle = new Triangle({
      left: 100,
      top: 100,
      width: 10,
      height: 50,
      fill: true,
      fillColor: randomColor(),
      stroke: true,
      strokeColor: randomColor(),
      strokeThickness: 2,
      rotate: 0
    });
    layer.add(triangle);
    setInterval(() => {
      triangle.rotate += 1;
    }, 10);
  }

  _createManyTriangles(){
    const layer = this.createLayer();
    const triangles = [];
    for(let i = 0; i < 100; i++){
      let fill = false;
      let stroke = false;
      let inverted = false;
      let choice = Math.random();
      if(choice > 0.9){
        fill = true;
        stroke = true;
        inverted = true;
      } else if(choice > 0.50){
        fill = false;
        stroke = true;
        inverted = true;
      } else {
        fill = true;
        inverted = false;
      }
      const triangle = new Triangle({
        left: Math.random() * 750,
        top: Math.random() * 400,
        width: Math.random() * 50 + 10,
        height: Math.random() * 25 + 10,
        fill: fill,
        fillColor: randomColor(),
        stroke: true,
        strokeColor: randomColor(),
        strokeThickness: Math.random() * 10,
        rotate: Math.random() * 360
      });
      triangles.push(triangle);
      layer.add(triangle);
    }
    setInterval(()=>{
      _.each(triangles, (triangle) => {
        triangle.left += 1;
        triangle.left = triangle.left % this.width;
      });
    }, 20);
  }

  _createManyPaths(){
    const layer = this.createLayer();
    const paths = [];
    for(let i = 0; i < 100; i++){
      const path = new Path({
        left: Math.random() * 750,
        top: Math.random() * 400,
        fill: true,
        fillColor: randomColor(),
        stroke: true,
        strokeColor: randomColor(),
        strokeThickness: 2,
        rotate: Math.random() * 360,
        path: [
          [
            [0,0],
            [10,10],
            [40,20],
            [50,-10],
            [60,5]
          ],
          [
            [10,0],
            [20,10],
            [30,0]
          ]
        ]
      });
      paths.push(path);
      layer.add(path);
    }
    setInterval(() => {
      _.each(paths, (path) => {
        path.left += 1;
        path.left = path.left % this.width;
      });
    }, 20);
  }

  _createManyCircles(){
    const layer = this.createLayer();
    const circles = [];
    for(let i = 0; i < 1000; i++){
      const circle = new Circle({
        left: Math.random() * 750,
        top: Math.random() * 400,
        fill: Math.random() > 0.5,
        fillColor: randomColor(),
        stroke: Math.random() > 0.5,
        strokeColor: randomColor(),
        strokeThickness: Math.random() * 5,
        radius: Math.random() * 20,
        rotate: Math.random() * 360,
        angle: Math.random() * 360
      });
      circles.push(circle);
      layer.add(circle);
    }
    setInterval(() => {
      _.each(circles, (circle) => {
        circle.left += 1;
        circle.left = circle.left % this.width;
      });
    }, 20);
  }

  _createProgressSemiCircle(){
    const layer = this.createLayer();
    const circle = new Circle({
      left: 100,
      top: 100,
      fill: false,
      stroke: true,
      strokeColor: 'red',
      strokeThickness: 10,
      radius: 50,
      rotate: 0,
      angle: 0
    });
    layer.add(circle);
    setInterval(() => {
      circle.angle += 1;
      circle.angle = circle.angle % 360;
    }, 20);
  }

  _createSpinningSemiCircle(){
    const layer = this.createLayer();
    const circle = new Circle({
      left: 100,
      top: 100,
      fill: false,
      stroke: true,
      strokeColor: 'blue',
      strokeThickness: 10,
      radius: 50,
      rotate: 0,
      angle: 180
    });
    layer.add(circle);
    setInterval(()=>{
      circle.rotate += 1;
      circle.rotate = circle.rotate % 360;
    }, 20);
  }
}

window.addEventListener('load', function(){
  this.canvas = new Canvas({
    width: 750,
    height: 500,
    container: document.querySelector("#canvas")
  });
  var examples = new Examples();
  this.canvas.add(examples);
});
