import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

import useStore from "../context";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const state = useStore();

  return (
    <AnimatePresence>
      {state?.userOnHome && (
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
                  Conoce los productos que tenemos disponibles para ti en
                  nuestra feria virtual. Entra, interactúa y disfruta.
                </p>
                <div className="flex flex-row gap-6 items-center justify-start w-fit">
                  <CustomButton
                    type="filled"
                    title="Explorar"
                    styles="w-fit px-4 py-2.5 font-bold text-md bg-[#336C17]"
                    handleClick={() => state.setUserOnHome(false)}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Home;
