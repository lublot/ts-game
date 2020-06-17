// import { ArrowAction, KeyboardAction } from "../enums/Commands";

// class PlayerGamepad {
//   private static instance: PlayerGamepad = null
//   private constructor() { }

//   static getInstance() {
//     if (this.instance == null) {
//       this.instance = new PlayerGamepad()
//     }
//     return this.instance
//   }

//   isMovingLeft(pressedKeys: Map<String, Boolean>) : Boolean {
//     return pressedKeys.get(ArrowAction.LEFT) || pressedKeys.get(KeyboardAction.LEFT)
//   }

//   isMovingRight(pressedKeys: Map<String, Boolean>) : Boolean {
//     return pressedKeys.get(ArrowAction.RIGHT) || pressedKeys.get(KeyboardAction.RIGHT)
//   }

//   isMovingTop(pressedKeys: Map<String, Boolean>) : Boolean {
//     return pressedKeys.get(ArrowAction.TOP) || pressedKeys.get(KeyboardAction.TOP)
//   }

//   isMovingDown(pressedKeys: Map<String, Boolean>) : Boolean {
//     return pressedKeys.get(ArrowAction.DOWN) || pressedKeys.get(KeyboardAction.DOWN)
//   }

//   isMovingDownLeft(pressedKeys: Map<String, Boolean>) : Boolean {
//     return this.isMovingDown(pressedKeys) && this.isMovingLeft(pressedKeys)
//   }

//   isMovingDownRight(pressedKeys: Map<String, Boolean>) : Boolean {
//     return this.isMovingDown(pressedKeys) && this.isMovingRight(pressedKeys)
//   }

//   isMovingTopLeft(pressedKeys: Map<String, Boolean>) : Boolean {
//     return this.isMovingTop(pressedKeys) && this.isMovingLeft(pressedKeys)
//   }

//   isMovingTopRight(pressedKeys: Map<String, Boolean>) : Boolean {
//     return this.isMovingTop(pressedKeys) && this.isMovingRight(pressedKeys)
//   }
// }

// export default PlayerGamepad
