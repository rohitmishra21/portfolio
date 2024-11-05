import React from "react";
import { Suspense } from "react";

import Border from "./Border";
import Education from "./Education";

const Modal = React.lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  return (
    <>
      <Border />

      <div className="w-full relative sm:py-12 sm:h-[90%] h-[100vh] xl:py-28 flex">
        <div className=" xl:w-1/2 xl:pr-20 sm:w-[80%] ">
          <h1 className="text-3xl uppercase ">Introduction</h1>
          <h1 className="xl:text-7xl text-4xl uppercase py-7 text-[#953269]   font-bold">
            Overview
          </h1>
          <p className=" text-xl">
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
        </div>
        <div className=" w-1/2  hidden items-center  h-full xl:flex justify-end">
          <Suspense fallback={<div>Loading 3D model...</div>}>
            <Modal
              scene="https://prod.spline.design/D9R4Y42W02hRy4CJ/scene.splinecode"
              style={{ transform: "scale(1.2)" }}
            />
          </Suspense>
        </div>
        <div className="bg-black w-60 xl:block hidden absolute -right-20 bottom-44 h-16"></div>
      </div>
      <Education />
    </>
  );
};

export default Hero;
