import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 items-center text-center">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Trainee School Leaver"
            subTitle="Bank Of Ceylon - (2023 - 2024)"
            result="LK"
            des="Worked as a trainee in the Marketing Department, assisting with promotional campaigns, customer engagement, and market research. Gained hands-on experience in understanding banking products, developing marketing strategies, and supporting the team in achieving departmental objectives."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
