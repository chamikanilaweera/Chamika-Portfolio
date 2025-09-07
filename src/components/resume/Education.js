import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex justify-center"
    >
      {/* Increased max-width from 5xl to 6xl */}
      <div className="max-w-6xl w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 items-center text-center">
          <p className="text-sm text-designColor tracking-[4px]">2008 - 2028</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computing and Information Systems"
            subTitle="Sabaragamuwa University of Sri Lanka (2024 - 2028)"
            result="3.90/4"
            des="I’m pursuing a BSc in Computing and Information Systems at Sabaragamuwa University of Sri Lanka, where I learn about software development, databases, networking, and modern technologies. This degree helps me gain both technical skills and practical experience to build real-world IT solutions."
          />
          <ResumeCard
            title="Diploma in English"
            subTitle="Britishway English Academy (2019)"
            result="4.75/5"
            des="I completed a Diploma in English at Britishway English Academy, where I improved my communication, writing, and speaking skills for both academic and professional use."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="St. Thomas' College Matara (2008 - 2021)"
            result="5.00/5"
            des="I completed my secondary school education at St. Thomas’ College, Matara, where I built a strong academic background and gained valuable skills through studies and extracurricular activities."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
