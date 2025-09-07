import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaInstagram,
  FaJava,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer,", "Project Manager."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO WEBSITE</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Chamika</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I build dynamic web applications and lead projects from concept to deployment, combining technical expertise with effective team management to deliver high-quality solutions.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-12 lgl:gap-12 justify-between">
        {/* Social Links */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
          <div className="flex gap-4 items-center">
            <a href="https://github.com/chamikanilaweera" target="blank">
              <span className="bannerIcon text-2xl"><FaGithub /></span>
            </a>
            <a href="https://www.facebook.com/share/175jZ1ETGy/?mibextid=wwXIfr" target="blank">
              <span className="bannerIcon text-2xl"><FaFacebookF /></span>
            </a>
            <a href="https://www.instagram.com/chamika_nilaweera?igsh=MXRjZTI5bDlseTM4Zw%3D%3D&utm_source=qr" target="blank">
              <span className="bannerIcon text-2xl"><FaInstagram /></span>
            </a>
            <a href="https://www.linkedin.com/in/chamika-nilaweera/" target="blank">
              <span className="bannerIcon text-2xl"><FaLinkedinIn /></span>
            </a>
          </div>
        </div>

        {/* Best Skills */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
          <div className="flex gap-4 flex-wrap items-center">
            <span className="bannerIcon text-2xl"><SiJavascript /></span>
            <span className="bannerIcon text-2xl"><FaJava /></span>
            <span className="bannerIcon text-2xl"><FaPython /></span>
            <span className="bannerIcon text-2xl"><FaReact /></span>
            <span className="bannerIcon text-2xl"><FaNodeJs /></span>
            <span className="bannerIcon text-2xl"><SiExpress /></span>
            <span className="bannerIcon text-2xl"><SiMongodb /></span>
            <span className="bannerIcon text-2xl"><SiHtml5 /></span>
            <span className="bannerIcon text-2xl"><SiCss3 /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
