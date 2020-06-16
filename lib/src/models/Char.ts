import MoveCommand from "../commands/MoveCommand";
import Solid2D from "./physics/Solid2D";
import Position2D from "./physics/Position2D";
import Directions from "../enums/Directions";

class Char extends Solid2D {
  private steps: number = 10;
  private moves: Map<Directions, Position2D>;

  constructor(x: number, y: number, context: HTMLCanvasElement) {
    super(x, y, 10, 10, context);
    this.moves = new Map([
      [Directions.EAST, new Position2D(this.steps, 0)],
      [Directions.WEST, new Position2D(-this.steps, 0)],
      [Directions.NORTH, new Position2D(0, -this.steps)],
      [Directions.NORTHEAST, new Position2D(this.steps, -this.steps)],
      [Directions.NORTHWEST, new Position2D(-this.steps, -this.steps)],
      [Directions.SOUTH, new Position2D(0, this.steps)],
      [Directions.SOUTHEAST, new Position2D(this.steps, this.steps)],
      [Directions.SOUTHWEST, new Position2D(-this.steps, this.steps)],
    ]);
  }

  move(direction: Directions): Boolean {
    if (!this.moves.has(direction)) return false;

    let desiredMove = this.moves.get(direction);
    let nextMove = {
      x: this.x + desiredMove.x,
      y: this.y + desiredMove.y,
    };
    let command = new MoveCommand(nextMove.x, nextMove.y, this);
    if (command.execute()) {
      this.x = nextMove.x;
      this.y = nextMove.y;
      return true;
    }
    return false;
  }
}

export default Char;
