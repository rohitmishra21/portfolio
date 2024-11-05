import Navbar from "./Navbar";
import React, { Suspense } from "react";
const SplineModal = React.lazy(() => import("@splinetool/react-spline"));

const Computer = () => {
  return (
    <>
      <Navbar />
      <div className="w-full sm:py-10 flex items-center  xl:h-[100vh] ">
        <div className="xl:w-1/2 w-full xl:py-11 h-full ">
          <h1 className=" py-8 xl:w-fit text-5xl font-semibold">
            Hi, I’m{" "}
            <span className=" italic text-[#953269]  "> Rohit Mishra</span>{" "}
          </h1>
          <h1 className="xl:w-96  w-full text-2xl xl:text-3xl">
            Frontend Web Developer | Passionate about creating responsive and
            visually stunning websites." "Building digital experiences with a
            focus on simplicity and functionality."
          </h1>
        </div>
        <div className="xl:block hidden h-full w-1/2 ">
          <Suspense fallback={<div>Loading 3D model...</div>}>
            <SplineModal
              scene="https://prod.spline.design/aucq01-pWVoKKa-0/scene.splinecode"
              style={{ transform: "scale(0.8)", objectFit: "cover" }}
            />
          </Suspense>
        </div>
        <div className="bg-black xl:block hidden w-32 h-12 absolute bottom-[25px] right-[160px] rounded-full"></div>
      </div>
    </>
  );
};

export default Computer;
