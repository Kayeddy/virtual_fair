export const actionByKey = (key) => {
  const keyActionMap = {
    KeyW: "moveForward",
    KeyS: "moveBackwards",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
    Digit1: "dirt",
    Digit2: "grass",
    Digit3: "glass",
    Digit4: "wood",
    Digit5: "log",
    KeyC: "showCatalog",
  };

  return keyActionMap[key];
};
