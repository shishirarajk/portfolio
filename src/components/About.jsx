import React from "react";
import aboutimg from "../assets/abt.gif";
import {
  ABOUT_TEXT1,
  ABOUT_TEXT2,
  ABOUT_TEXT3,
  ABOUT_TEXT4,
} from "../constants/index";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" pb-4">
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
        className="my-30 text-center text-4xl text-purple-200"
      >
        About Me
      </motion.h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 m-5 md:m-0 lg:m-0">
          <motion.div
            // whileInView={{ opacity: 1, x: 0 }}
            // initial={{ opacity: 0, x: -100 }}
            // transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <img className="rounded-2xl" src={aboutimg} alt="aboutimg" />
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start  flex-col md:mt-11 lg:mt-11">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{
                opacity: 0,
                x: 100,
                backgroundImage: "linear-gradient(to right, #a855f7, #a855f7)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              whileHover={{
                backgroundImage: "linear-gradient(to right, #ff7e5f, #CD5C5C)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              transition={{ duration: 0.5 }}
              className="my-3 max-w-xl pt-6 text-base"
            >
              {ABOUT_TEXT1}
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{
                opacity: 0,
                x: 100,
                backgroundImage: "linear-gradient(to right, #a855f7, #a855f7)",
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
              transition={{ duration: 0.5 }}
              className="my-3 max-w-xl text-base"
            >
              {" "}
              {ABOUT_TEXT2}
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{
                opacity: 0,
                x: 100,
                backgroundImage: "linear-gradient(to right, #a855f7, #a855f7)",
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
              transition={{ duration: 0.5 }}
              className="my-3 max-w-xl text-base"
            >
              {" "}
              {ABOUT_TEXT3}
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{
                opacity: 0,
                x: 100,
                backgroundImage: "linear-gradient(to right, #a855f7, #a855f7)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              whileHover={{
                backgroundImage: "linear-gradient(to right, #ff7e5f,#CD5C5C)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              transition={{ duration: 0.5 }}
              className="my-3 max-w-xl pb-6 text-base"
            >
              {" "}
              {ABOUT_TEXT4}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
