# Canvas Toolkit
A widget toolkit for canvas, with some basic predefined elements and a layering system.

## Quickstart
  Create a div to contain the canvas.
  ```html
<div id="canvas" style="width:750px;height:500px;"></div>
  ```
  Create a new Canvas object.
  ```javascript
import {Canvas} from 'canvas-toolkit';
const canvas = new Canvas({
  width: 750,
  height: 500,
  container: document.querySelector("#canvas")
});
canvas.
  ```

  Add an element.
  ```javascript
canvas.add(new Text({
    left: 10,
    top: 10,
    text: 'Foobar'
}));
  ```

  That's it. The canvas should draw itself automatically, and you should see your text.

## Updating Elements
  The canvas will automatically redraw when an element is changed.
  ```javascript
const canvas = new Canvas({width: 750, height: 500, container:document.querySelector("#canvas")});
const text = new Text({left: 10, top: 10, text: 'Foobar'});
canvas.add(text);

//updating the text position will cause the canvas to automatically redraw, and the
//text will gradually move to the right.
setInterval(() => {
  text.left += 1;
}, 50);
```

## List of Elements

###  [Circle](src/elements/Circle.js)

  The circle element can either draw a full circle, or a slice of a circle, depending on
  the "angle" parameter.

  ```javascript
const circle = new Circle({
  // the left coordinate of the circle, relative to the canvas
  left: 0,
  //the right coordinate of the circle, relative to the canvas
  top: 0,
  //whether to draw the fill color
  fill: true,
  //the color that fills the circle
  fillColor: '#CCCCCC',
  //whether to draw the stroke line
  stroke: true,
  //the color of the line around the circle
  strokeColor: '#000000',
  //the thickness of the line around the circle
  strokeThickness: 1,
  //the radius of the circle
  radius: 10,
  //how much to rotate the circle, in degrees
  rotate: 0,
  //the angle of the circle. Angles less than 360 produce a partial circle.
  angle: 360
});
  ```

  ### [Line](src/elements/Line.js)

  An element that draws a line between two points.
  ```javascript
const dashedLine = new Line({
  // the left coordinate of the line, relative to the canvas
  left: 10,
  // the right coordinate of the line, relative to the canvas
  top: 10,
  //the x value of the beginning of the line
  x1: 0,
  //the y value of the beginning of the line  
  y1: 0,
  //the x value of the end of the line
  x2: 500,
  //the y value of the end of the line
  y2: 500,
  //how much to rotate the line
  rotate: 0,
  //the color of the line
  color: '#a7c',
  //the line cap
  lineCap: 'square',
  //whether the line is dashed
  dashed: true,
  //the spacing between dashes
  dashSpacing: [10,5],
  //the thickness of the line
  thickness: 1
});
  ```

  [Path](src/elements/Path.js)

  The path element takes an arbitrary list of coordinates and draws a path between them.

  ```javascript
const path = new Path({
  //the left coordinate of the path, relative to the canvas.
  left: 0,
  //the top coordinate of the path, relative to the canvas.
  top: 0,
  //whether to fill the path with a color
  fill: true,
  //the color used to fill the path
  fillColor: '#44ff56',
  //whether to draw a line around the path
  stroke: true,
  //the color of the line around the path
  strokeColor: '#068fff',
  //how thick the line around the path should be
  strokeThickness: 2,
  //how much to rotate this element
  rotate: 90,
  //a list of lists of [x,y] coordinates that the path runs through. Each separate
  //list a different path that will be drawn (multiple paths can be provided.)
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

  ```

###  [Text](src/elements/Text.js)

  This element draws a piece of text to the canvas.

  ```javascript
const text = new Text({
  //the left coordinate of the text, relative to the canvas
  left: 200,
  //the top coordinate of the text, relative to the canvas
  top: 100,
  //the text to draw
  text: 'Count: 0',
  //the color of the text
  color: 'red',
  //the font of the text
  font: {
    //the font family
    family: 'DejaVu Sans Mono',
    //the font size
    size: 44,
    //the font style
    style: 'normal',
    //the font weight
    weight: 'bold'
  }
});
  ```

###  [Triangle](src/elements/Triangle.js)

  This element draws a triangle.

```javascript
const triangle = new Triangle({
  //the left coordinate of the text, relative to the canvas
  left: 0,
  //the top coordinate of the text, relative to the canvas
  top: 0,
  //the width of the triangle
  width: 10,
  //the height of the triangle
  height: 50,
  //whether to fill the triangle
  fill: true,
  //what color to use to fill the triangle
  fillColor: randomColor(),
  //whether to draw the stroke line around the triangle
  stroke: true,
  //the color of the stroke line
  strokeColor: randomColor(),
  //the stroke line's thickness
  strokeThickness: 2,
  //how much to rotate the triangle, in degrees
  rotate: 0
});
```
