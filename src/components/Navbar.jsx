import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-purple-400 font-bold text-lg">Srk</p>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/shishirarajk" target="_blank">
          <FaLinkedin className="text-purple-500"/>
        </a>
        <a href="https://github.com/shishirarajk" target="_blank">
          <FaGithub className="text-purple-500" />
        </a>

        <a href="https://www.instagram.com/mehu_shish?igsh=cno0bm5iZXdjdXc=" target="_blank">
        <FaInstagram className="text-purple-500"/>
        </a>

        
      </div>
    </nav>
  );
};

export default Navbar;
