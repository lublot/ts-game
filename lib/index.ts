import CharFactory from "./src/factories/CharFactory";
import Gamepad from "./src/models/DesktopGamepad";
import Directions from "./src/enums/Directions";

var player = new CharFactory(
  0,
  0,
  document.querySelector("#gameboard")
).create();

document.addEventListener("keydown", function (evt) {
  let gamepad = Gamepad.getInstance();
  player.move(gamepad.onPerform(evt));
});

document.addEventListener("keyup", function (evt) {
  let gamepad = Gamepad.getInstance();
  gamepad.onRelease(evt);
});
