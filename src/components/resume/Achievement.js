import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 items-center text-center">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Programming with JavaScript"
            subTitle="Coursera"
            result="Completed"
            des="Completed the Programming with JavaScript course on Coursera, enhancing coding and problem-solving skills for web development projects."
          />
          <ResumeCard
            title="Web Design for Beginners"
            subTitle="Centre for Open & Distance Learning (CODL), University of Moratuwa"
            result="Completed"
            des="Learned web design fundamentals, including HTML, CSS, and user-friendly design practices, building a strong foundation for web development."
          />
          <ResumeCard
            title="Foundations of Cybersecurity"
            subTitle="Coursera"
            result="Completed"
            des="Gained a solid understanding of cybersecurity principles, risk management, and best practices to protect digital assets in real-world scenarios."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
