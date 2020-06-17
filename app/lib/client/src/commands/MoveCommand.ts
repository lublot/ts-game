import BaseCommand from "./BaseCommand";
import Solid2D from "../models/physics/Solid2D";

class MoveCommand implements BaseCommand{
  private x: number;
  private y: number;
  private moveable: Solid2D;
  
  constructor(newX: number, newY: number, moveable: Solid2D) {
    this.x = newX
    this.y = newY
    this.moveable = moveable
  }
  
  execute(): Boolean{
    if (
      (this.x < 0 || this.x + this.moveable.width > this.moveable.context.width) ||
      (this.y < 0 || this.y + this.moveable.height > this.moveable.context.height)
    ) {
      return false
    }

    let context = this.moveable.context.getContext("2d")
    context.clearRect(0, 0, this.moveable.context.width, this.moveable.context.height)
    context.fillRect(this.x, this.y, this.moveable.width, this.moveable.height)
    context.stroke()
    return true
  }
}

export default MoveCommand