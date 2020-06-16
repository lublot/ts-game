abstract class Solid2D {
  protected x: number;
  protected y: number;
  readonly width: number;
  readonly height: number;
  readonly context: HTMLCanvasElement;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    context: HTMLCanvasElement
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context;
  }
}

export default Solid2D;
