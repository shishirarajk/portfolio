import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJqueryUiLogo } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className=" pb-24">
      <motion.h1
        initial={{
          backgroundImage: "linear-gradient(to right, #ECD4F5, #580A74)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        whileHover={{
          backgroundImage: "linear-gradient(to right, #ff7e5f,  #CD5C5C)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl shadow-2xl bg-purple-100 border p-4 group cursor-pointer"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="absolute top-20 text-purple-600 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            React.js
          </p>
        </motion.div>

        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl shadow-2xl bg-purple-100 border p-4 group cursor-pointer"
        >
          <DiJavascript1 className="text-7xl text-yellow-400" />
          <p className="absolute top-20 text-purple-600 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            javascript
          </p>
        </motion.div>

        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl shadow-2xl bg-purple-100 border p-4 group cursor-pointer"
        >
          <DiJqueryUiLogo className="text-7xl text-blue-400" />
          <p className="absolute top-20 text-purple-600 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            jQuery
          </p>
        </motion.div>

        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl shadow-2xl bg-purple-100 border p-4 group cursor-pointer"
        >
          <DiHtml5 className="text-7xl text-red-400" />
          <p className="absolute top-20 text-purple-600 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            HTML
          </p>
        </motion.div>

        <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl shadow-2xl bg-purple-100 border p-4 group cursor-pointer"
        >
          <DiSass className="text-7xl text-pink-400" />
          <p className="absolute top-20 text-purple-600 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Saas
          </p>
        </motion.div>

        {/* <motion.div
          variants={iconVariant(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xk border-4 border-neutral-800 p-4"
        >
          <DiWordpress className="text-7xl text-cyan-400" />
        </div> */}
      </motion.div>
    </div>
  );
};

export default Technologies;
