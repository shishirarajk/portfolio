import React from "react";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
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
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter text-purple-600">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="#"
          className="border-b"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
