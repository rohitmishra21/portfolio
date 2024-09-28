import React from "react";
import { experiences } from "../constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const ServiceCard = ({ title, Description,img }) => {
  return (
    <Tilt className="w-full">
      <motion.div className="w-full green-pink-gradiant rounded-[20px] border-2  shadow-sm shadow-white border-white/50 ">
        <div className="bg-[#070a23]  flex flex-col justify-center gap-10 items-center min-h-[280px]  rounded-[20px]">
        <img src={img} className="w-20" alt="" />
          <p className="text-lg font-semibold px-4 text-center">{title}</p>
         
         
        </div>
      </motion.div>
    </Tilt>
  );
};

const Hero = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="px-40 py-20">
          <h1 className="text-3xl uppercase text-gray-300/50">Introduction</h1>
          <h1 className="text-7xl uppercase py-7 text-gray-300/50 font-bold">
            Overview
          </h1>
          <p className="w-1/2 text-gray-300/50 text-xl">
            Hey there! I'm Rohit Mishra, a frontend web developer with a fresh
            perspective and a strong foundation in modern web technologies. I
            have a passion for designing and developing intuitive, dynamic user
            interfaces. My toolkit includes HTML, CSS, JavaScript, React.js,
            GSAP, Framer Motion, and Tailwind CSS, all of which allow me to
            create engaging and responsive websites. As a fresher, I'm
            constantly learning and experimenting with new ideas to enhance user
            experience and interface design. Let's build something amazing
            together!
          </p>
          <div className="flex gap-8 mt-20 ">
            {experiences.map((experience, index) => (
              <ServiceCard
                key={experience.title}
                index={index}
                {...experience}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
