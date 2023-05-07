import React, { useCallback, useEffect, useState } from "react";

import { actionByKey } from "../helpers";

export const keyboardControls = () => {
  const [movement, setMovement] = useState({
    moveForward: false,
    moveBackwards: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    setTexture1: false,
    setTexture2: false,
    setTexture3: false,
    setTexture4: false,
    setTexture5: false,
  });

  const handleKeyDown = useCallback((e) => {
    if (actionByKey(e.code))
      setMovement((m) => ({ ...m, [actionByKey(e.code)]: true }));
  }, []);

  const handleKeyUp = useCallback((e) => {
    if (actionByKey(e.code))
      setMovement((m) => ({ ...m, [actionByKey(e.code)]: false }));
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {};
  }, [handleKeyDown, handleKeyUp]);

  return movement;
};
