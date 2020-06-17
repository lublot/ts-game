import Directions from "../../enums/Directions";
abstract class AbstractGamepad {
  protected abstract evaluateMovement(): Directions;
  abstract onPerform(event: any): Directions;
  abstract onRelease(event: any): Boolean;
}

export default AbstractGamepad;
