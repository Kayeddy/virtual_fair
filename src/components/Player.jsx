import React, { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { Vector3 } from "three";
import { keyboardControls } from "../hooks/KeyboardControls";

const Player = () => {
  const { camera } = useThree();
  const movement = keyboardControls();
  console.log(
    "action",
    Object.entries(movement).filter(([k, v]) => v)
  );

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 3, 0],
  }));

  // Velocity
  const vel = useRef([0, 0, 0]);
  // Position
  const pos = useRef([0, 0, 0]);

  useFrame(() => {
    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (movement.moveBackwards ? 1 : 0) - (movement.moveForward ? 1 : 0)
    );

    const sideVector = new Vector3(
      (movement.moveLeft ? 1 : 0) - (movement.moveRight ? 1 : 0),
      0,
      0
    );

    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(4)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, vel.current[1], direction.z);

    if (movement.jump && Math.abs(vel.current[1] < 0.3))
      api.velocity.set(vel.current[0], 3, vel.current[2]);

    if (movement.forward) api.velocity.set(0, 0, -3);

    if (movement.backward) api.velocity.set(0, 0, 3);

    if (movement.left) api.velocity.set(-3, 0, 0);

    if (movement.right) api.velocity.set(3, 0, 0);
  });

  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
  }, [api.position]);

  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);

  return (
    <>
      <mesh ref={ref} />
    </>
  );
};

export default Player;
