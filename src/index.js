import Line from './elements/Line';
import Path from './elements/Path';
import Rectangle from './elements/Rectangle';
import Text from './elements/Text';
import Circle from './elements/Circle';
import Triangle from './elements/Triangle';
import Canvas from './core/Canvas';
import CanvasElement from './core/CanvasElement';
import LayeredElement from './core/LayeredElement';

const CanvasToolkit = {
  Path,
  Rectangle,
  Triangle,
  Text,
  Line,
  Circle,
  Canvas,
  CanvasElement,
  LayeredElement
};

window.CanvasToolkit = CanvasToolkit;

export default CanvasToolkit;
