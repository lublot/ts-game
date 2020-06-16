import AbstractGamepad from "./abstract/AbstractGamepad";
import Directions from "../enums/Directions";
import { ArrowAction, KeyboardAction } from "../enums/Commands";

class DesktopGamepad extends AbstractGamepad {
  private pressedKeys: Map<String, Boolean>;
  private static instance: AbstractGamepad;

  private constructor() {
    super();
    this.pressedKeys = new Map<String, Boolean>();
  }

  static getInstance(): AbstractGamepad {
    if (!this.instance) {
      this.instance = new DesktopGamepad();
    }
    return this.instance;
  }

  protected evaluateMovement(): Directions {
    if (this.isMovingDownLeft(this.pressedKeys)) {
      return Directions.SOUTHWEST;
    } else if (this.isMovingDownRight(this.pressedKeys)) {
      return Directions.SOUTHEAST;
    } else if (this.isMovingDown(this.pressedKeys)) {
      return Directions.SOUTH;
    } else if (this.isMovingTopLeft(this.pressedKeys)) {
      return Directions.NORTHWEST;
    } else if (this.isMovingTopRight(this.pressedKeys)) {
      return Directions.NORTHEAST;
    } else if (this.isMovingTop(this.pressedKeys)) {
      return Directions.NORTH;
    } else if (this.isMovingLeft(this.pressedKeys)) {
      return Directions.WEST;
    } else if (this.isMovingRight(this.pressedKeys)) {
      return Directions.EAST;
    }
  }

  onPerform(event: KeyboardEvent): Directions {
    this.pressedKeys.set(event.code, true);
    return this.evaluateMovement();
  }

  onRelease(event: KeyboardEvent): Boolean {
    return this.pressedKeys.delete(event.code);
  }

  private isMovingLeft(pressedKeys: Map<String, Boolean>): Boolean {
    return (
      pressedKeys.get(ArrowAction.LEFT) || pressedKeys.get(KeyboardAction.LEFT)
    );
  }

  private isMovingRight(pressedKeys: Map<String, Boolean>): Boolean {
    return (
      pressedKeys.get(ArrowAction.RIGHT) ||
      pressedKeys.get(KeyboardAction.RIGHT)
    );
  }

  private isMovingTop(pressedKeys: Map<String, Boolean>): Boolean {
    return (
      pressedKeys.get(ArrowAction.TOP) || pressedKeys.get(KeyboardAction.TOP)
    );
  }

  private isMovingDown(pressedKeys: Map<String, Boolean>): Boolean {
    return (
      pressedKeys.get(ArrowAction.DOWN) || pressedKeys.get(KeyboardAction.DOWN)
    );
  }

  private isMovingDownLeft(pressedKeys: Map<String, Boolean>): Boolean {
    return this.isMovingDown(pressedKeys) && this.isMovingLeft(pressedKeys);
  }

  private isMovingDownRight(pressedKeys: Map<String, Boolean>): Boolean {
    return this.isMovingDown(pressedKeys) && this.isMovingRight(pressedKeys);
  }

  private isMovingTopLeft(pressedKeys: Map<String, Boolean>): Boolean {
    return this.isMovingTop(pressedKeys) && this.isMovingLeft(pressedKeys);
  }

  private isMovingTopRight(pressedKeys: Map<String, Boolean>): Boolean {
    return this.isMovingTop(pressedKeys) && this.isMovingRight(pressedKeys);
  }
}

export default DesktopGamepad;
