import React from "react";
import { usePlane } from "@react-three/cannon";

import useStore from "../context";
import { groundTexture } from "../utils/texture";
import {
  NearestFilter,
  NearestMipMapLinearFilter,
  RepeatWrapping,
} from "three";

const Ground = () => {
  const state = useStore();
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));

  groundTexture.magFilter = NearestFilter;
  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(100, 100);

  return (
    <>
      <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial attach="material" map={groundTexture} />
      </mesh>
    </>
  );
};

export default Ground;
