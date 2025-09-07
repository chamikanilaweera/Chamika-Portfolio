import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, github, demo }) => {
  return (
    <div className="w-full p-4 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-[#1e2024] to-[#23272b] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-500">
      
      {/* Project Image */}
      <div className="w-full h-[200px] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
          src={src}
          alt={title}
        />
      </div>

      {/* Project Info */}
      <div className="mt-5 flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-sm tracking-wide text-gray-400">{des}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e2024] text-gray-300 rounded-lg hover:bg-[#2d2f34] transition-colors duration-300"
            >
              <FaGithub /> Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e2024] text-gray-300 rounded-lg hover:bg-[#2d2f34] transition-colors duration-300"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
