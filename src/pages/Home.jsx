import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  return (
    <AnimatePresence>
      <div className="absolute z-10 bg-white backdrop-blur-[4px] bg-opacity-5 w-full h-full">
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text gradientText">
                <motion.span className="block">Virtual fair</motion.span>
              </h1>
            </motion.div>

            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-[80%] font-normal font-jakarta text-gray-600 text-[1.2rem]">
                Conoce los productos que tenemos disponibles para ti en nuestra
                feria virtual. Entra, interactúa y disfruta.
              </p>
              <div className="flex flex-row gap-6 items-center justify-start w-fit">
                <CustomButton
                  type="filled"
                  title="Explorar"
                  styles="w-fit px-4 py-2.5 font-bold text-md bg-[#336C17]"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
        {/* 
      <motion.div
        {...slideAnimation("up")}
          className={`hidden md:block absolute bottom-5 lg:bottom-0 right-5 xl:right-[10%] md:w-[30vw] lg:w-[35vw] ${
          !adjustFloatingCard ? "xl:top-[38.5vh]" : "xl:top-[350px]"
          }`}
        >
          <FloatingCard items={items} smallScreens={setAdjustFloatingCard} />
          </motion.div>
*/}
      </div>
    </AnimatePresence>
  );
};

export default Home;
