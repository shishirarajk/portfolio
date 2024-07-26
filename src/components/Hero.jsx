import React, { useState } from "react";
import profilepic from "../assets/shishira.jpg";
import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const text = HERO_CONTENT;
  const hoverRange = 2;
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-3 md:pb-16 lg:pb-16 text-purple-500 text-4xl font-light tracking-tighter lg:text-8xl"
            >
              Shishira Raj K
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-center mb:text-left lg:text-left bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>

            {/* <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
          
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-purple-600"
            >
              {HERO_CONTENT}
            </motion.p> */}
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-purple-600"
            >
              {text.split("").map((char, index) => {
                const isHovered =
                  hoverIndex !== null &&
                  Math.abs(hoverIndex - index) <= hoverRange;
                return (
                  <motion.span
                    key={index}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    animate={{
                      // color: isHovered ? "#CD5C5C" : "#a855f7",
                      fontWeight: isHovered ? "600" : "400",
                      transition: {
                        duration: 0,
                        ease: "easeInOut",
                      },
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilepic}
              alt="shishira"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
