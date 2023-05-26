import React, { useState } from "react";
import { useBox } from "@react-three/cannon";
import { dirtTexture, glassTexture, woodTexture } from "../utils/texture";
import useStore from "../context";

const Cube = ({ position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const activeTexture = woodTexture;

  const [addCube, removeCube, cubes, toggleProductsCatalog] = useStore(
    (state) => [
      state.addCubes,
      state.removeCube,
      state.placedCubes,
      state.toggleProductsCatalog,
    ]
  );

  return (
    <mesh
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={() => {
        toggleProductsCatalog(true);
        console.log("clicked");
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        map={activeTexture}
        transparent={true}
        opacity={texture === "glass" ? 0.6 : 1}
        attach="material"
      />
    </mesh>
  );
};

export default Cube;
