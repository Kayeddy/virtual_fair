import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import { Ground } from "../components";

import Player from "../components/Player";

const Fair = () => {
  return (
    <>
      <Canvas className="w-full max-w-full h-full transition-all ease-in">
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
    </>
  );
};

export default Fair;
