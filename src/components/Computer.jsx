import React from "react";
import Spline from "@splinetool/react-spline";
import Navbar from "./Navbar";
const Computer = () => {
  return (
    <>
    <div className="w-full text-gray-300/50">
    <main className="relative">
      <div className="w-full absolute  ">
        <Navbar />
        <div className=" py-11  px-40 h-64 w-full">
            <h1 className=" py-8 w-fit text-5xl ">Hi, I’m Rohit Mishra</h1>
          <h1 className="w-96 text-3xl">
           Frontend Web Developer |  Passionate about
            creating responsive and visually stunning websites." "Building
            digital experiences with a focus on simplicity and functionality."
          </h1>
   
        </div>
      </div>
      <Spline className="z-40  " scene="https://prod.spline.design/b4UGw7-Nd5uf1LA1/scene.splinecode" />
         
      <div className="absolute w-40 h-12 bg-black bottom-4 right-0 "></div>
    </main>
    </div>
   
    </>
   
  );
};

export default Computer;
