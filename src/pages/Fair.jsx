import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import { Ground } from "../components";
import Player from "../components/Player";
import FPV from "../components/FPV";
import CubeRenderer from "../components/CubeRenderer";
import useStore from "../context";
import ProductsCatalog from "../components/ProductsCatalog";
import CustomButton from "../components/CustomButton";
import { shirtFair, necklaceFair, shoesFair, watchFair } from "../assets";

const Fair = () => {
  const [showCatalog, setShowCatalog] = useState(false);

  return (
    <>
      <Canvas className="w-full max-w-full h-full transition-all ease-in">
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <CubeRenderer />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute top-[50%] left-[50%] text-[25px] w-fit h-fit">
        +
      </div>
      {window.addEventListener("click", (event) => {
        if (event.button === 2) {
          setShowCatalog((prev) => {
            return !prev;
          });
        }
      })}
      {showCatalog && (
        <div className="absolute top-0 bottom-0 w-full flex z-20">
          <div className="bg-white rounded-md flex flex-col items-center justify-center gap-10 h-full w-full p-10">
            <h1 className="text-black">Productos disponibles</h1>
            <div className="flex flex-col items-center justify-center gap-4 text-black h-fit w-[30%] ">
              <div className="flex flex-row gap-10 items-center justify-center border border-black p-2">
                <img src={shirtFair} alt="" className="w-16 h-10" />
                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="font-bold text-lg">Camisa Polo black</p>
                  <p>Camisa fina hecha con las mejores telas del mercado.</p>
                  <p className="font-semibold">Precio: $50,000 COP</p>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center justify-center border border-black p-2">
                <img src={necklaceFair} alt="" className="w-16 h-10" />
                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="font-bold text-lg">Cadena premium para mujer</p>
                  <p>
                    No se puede encontrar mejor cadena que esta, hecha a mano y
                    haciendo uso de las joyas mas finas.{" "}
                  </p>
                  <p className="font-semibold">Precio: $50,000 COP</p>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center justify-center border border-black p-2">
                <img src={shoesFair} alt="" className="w-14 h-10" />
                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="font-bold text-lg">Zapatos unisex deportivos</p>
                  <p>
                    Si buscas rendir mejor en tu deporte favorito este es el par
                    de zapatos para ti, Corre, salta y lleva tus capacidades
                    deportivas a otro nivel.
                  </p>
                  <p className="font-semibold">Precio: $50,000 COP</p>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center justify-center border border-black p-2">
                <img src={watchFair} alt="" className="w-12 h-10" />
                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="font-bold text-lg">Reloj Rolex fino</p>
                  <p>
                    Este reloj refleja la clase alta, hecho con oro del espacio
                    y listo para ser presumido ante el mundo entero. No te
                    pierdas esta oportunidad para comprarlo.
                  </p>
                  <p className="font-semibold">Precio: $50,000 COP</p>
                </div>
              </div>
            </div>

            <div>
              <CustomButton
                type="filled"
                title="Cerrar"
                styles="w-fit px-4 py-2.5 font-bold text-md bg-[#336C17]"
                handleClick={() =>
                  setShowCatalog((prev) => {
                    return !prev;
                  })
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Fair;
