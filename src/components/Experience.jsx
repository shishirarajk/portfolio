import React from "react";
import { EXPERIENCES } from "../constants/index";
import { motion } from "framer-motion";

const Experience = () => {
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
        className="mb-6 md:my-20 lg:my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-base text-purple-900 font-light">
                {experience.year}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                <span className="text-purple-500 font-light">
                  {experience.role} -{" "}
                </span>
                <span className="text-sm text-purple-600">
                  {experience.company}
                </span>
              </h6>

              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, ind) => (
                  <span
                    key={ind}
                    className="mr-2 mt-4 rounded bg-white border-2 border-purple-600 px-2 py-1 text-sm font-medium text-purple-800 shadow-2xlF"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
