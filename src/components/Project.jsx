import React from "react";
import projects from "../constants/ProjectData";
import { FaArrowRightLong } from "react-icons/fa6";
function Project() {
  return (
    <>
      <div className="">
        <h1 className="text-7xl uppercase text-center py-16  text-[#953269]   font-bold">
          Project
        </h1>
        {projects.map((project) => (
          <>
            <div
              className={`h-[70vh]  flex ${project.row} pr-20 justify-center items-center w-full`}
            >
              <div className=" w-1/2  h-[100%] ">
                <img src={project.img} className="h-full object-cover" alt="" />
              </div>

              <div className="flex-col flex justify-cente px-10 items-start gap-10 w-1/2  h-[70%] ">
                <h1 className="text-4xl text-[#fd5fb6]  font-medium uppercase">
                  {project.name}
                </h1>
                <p className="">{project.para}</p>
                <button className="px-8 py-3 hover:-translate-y-3 transition-all duration-200 shadow-lg s bg-[#953269] rounded-lg font-bold">
                  CASE STUDTY
                </button>
              </div>
            </div>
          </>
        ))}
        <div className="flex justify-end">
          <button className="px-8 py-3 hover:-translate-y-3 transition-all duration-200 shadow-lg s bg-[#953269] rounded-lg font-bold">
            Seen all
          </button>
        </div>
      </div>
    </>
  );
}

export default Project;
