import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaProjectDiagram, FaCode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiAgile, SiAndela } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do ?" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Project Management"
          des="Lead and manage projects from planning to deployment using Agile methodologies to ensure timely and quality delivery."
          icon={<FaProjectDiagram />}
        />
        <Card
          title="Frontend"
          des="Build responsive and dynamic user interfaces using React and Tailwind CSS for seamless user experience."
          icon={<SiReact />}
        />
        <Card
          title="Backend"
          des="Develop robust backend systems with Node.js and Express.js, ensuring efficient API and server-side logic."
          icon={<SiNodedotjs />}
        />
        <Card
          title="Database"
          des="Design and manage databases using MongoDB for scalable and high-performance applications."
          icon={<SiMongodb />}
        />
        <Card
          title="Agile & Team"
          des="Coordinate teams, manage workflows, and optimize processes using Agile principles for efficient project delivery."
          icon={<SiAndela />}
        />
        <Card
          title="Full-Stack"
          des="Combine frontend, backend, and database knowledge to build complete MERN stack applications efficiently."
          icon={<FaCode />}
        />
      </div>
    </section>
  );
};

export default Features;
