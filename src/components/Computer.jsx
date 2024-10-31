import React from "react";
import Spline from "@splinetool/react-spline";
import Navbar from "./Navbar";
const Computer = () => {
  return (
    <>
       <Navbar/>
      <div className="w-full flex items-center h-[100vh]  ">
     
        <div className="w-1/2  py-11     h-full">
          <h1 className=" py-8 w-fit text-5xl font-semibold">Hi, I’m <span className=" italic text-[#953269]  "> Rohit Mishra</span> </h1>
          <h1 className="w-96 text-3xl">
            Frontend Web Developer | Passionate about creating responsive and
            visually stunning websites." "Building digital experiences with a
            focus on simplicity and functionality."
          </h1>
        </div>
        <div className="w-1/2 h-full mb-40">
        <Spline
       
        scene="https://prod.spline.design/aucq01-pWVoKKa-0/scene.splinecode" 
        style={{ transform: 'scale(0.8)' }}
      />

        </div>
       <div className="bg-black w-28 h-8 absolute bottom-[87px] right-[190px] rounded-full">

       </div>
      </div>
    </>
  );
};

export default Computer;
