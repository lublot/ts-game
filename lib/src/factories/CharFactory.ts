import Char from "../models/Char";

class CharFactory {
  private x: number;
  private y: number;
  private context: HTMLCanvasElement;

  constructor(x: number, y: number, context: HTMLCanvasElement) {
    this.x = x;
    this.y = y;
    this.context = context;
  }
  create() {
    return new Char(this.x, this.y, this.context);
  }
}

export default CharFactory;
