import React from "react";
import useStore from "../context";
import Cube from "./Cube";

const CubeRenderer = () => {
  const [placedCubes] = useStore((state) => [state?.placedCubes]);
  return placedCubes?.map(({ key, pos, texture }) => {
    return <Cube key={key} position={pos} texture={texture} />;
  });
};

export default CubeRenderer;
