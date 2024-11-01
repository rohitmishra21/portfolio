import React from "react";
import { Tilt } from "react-tilt";
const Education = () => {
  return (
    <div className="text-white ">
      <h1 className="text-7xl uppercase py-7 text-[#953269]   font-bold">
        Education
      </h1>
      <div className="flex gap-12">
      <Tilt className="w-1/2 py-16">
        <div className="w-full  green-pink-gradiant rounded-[20px] border-2  shadow-sm shadow-white border-white/50 ">
          <h1 className="px-6 py-3 font-extrabold text-xl text-[#953269] ">2019-2020</h1>
          <h1 className="px-6 text-3xl font-medium">Higher Secondary Education</h1>
          <h1 className="px-6 py-4 text-2xl font-semibold">Govt Model School</h1>
        </div>
      </Tilt>
      <Tilt className="w-1/2 py-16">
        <div className="w-full  green-pink-gradiant rounded-[20px] border-2  shadow-sm shadow-white border-white/50 ">
          <h1 className="px-6 py-3 font-extrabold  text-xl text-[#953269] ">2020-2022</h1>
          <h1 className="px-6 text-3xl font-medium">Bachelor of Computer Applications</h1>
          <h1 className="px-6 py-4 text-2xl font-semibold">Makhanlal University</h1>
        </div>
      </Tilt>
      </div>
     
    </div>
  );
};

export default Education;
