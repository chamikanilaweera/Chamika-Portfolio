import React from 'react';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex justify-center">
      
      {/* Quick Links Centered */}
      <div className="flex flex-col items-center">
        <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">
          Quick Links
        </h3>
        <ul className="flex flex-wrap justify-center gap-6 font-titleFont font-medium overflow-hidden">
          <li>
            <a href="#home" className="text-lg cursor-pointer hover:text-designColor duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg cursor-pointer hover:text-designColor duration-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#features" className="text-lg cursor-pointer hover:text-designColor duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg cursor-pointer hover:text-designColor duration-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#resume" className="text-lg cursor-pointer hover:text-designColor duration-300">
              Resume
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Footer;
