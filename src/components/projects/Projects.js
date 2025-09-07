import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../../assets/index";

const projectData = [
  {
    title: "Coffe-Shop Website",
    des: "A responsive café landing page built with HTML, CSS, and JavaScript.",
    src: projectOne,
    github: "https://github.com/chamikanilaweera/Coffe-Shop",
    demo: "https://chamikanilaweera.github.io/Coffe-Shop/",
  },
  {
    title: "FitPlan-AI",
    des: "A personal fitness planning web app for creating and tracking workouts.",
    src: projectTwo,
    github: "https://github.com/chamikanilaweera/FitPlan-AI",
    demo: "https://chamikanilaweera.github.io/FitPlan-AI/",
  },
  {
    title: "Real-Estate Agency Website",
    des: "A modern real estate landing page built with HTML and CSS.",
    src: projectThree,
    github: "https://github.com/chamikanilaweera/Real-Estate-Agency-Website",
    demo: "https://chamikanilaweera.github.io/Real-Estate-Agency-Website/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
