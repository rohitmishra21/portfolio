import React from "react";
import Border from "./Border";
import { FaPen } from "react-icons/fa";
import { Tilt } from "react-tilt";
import Services from "../constants/ServiceData";

const Service = () => {
  return (
    <>
      <div className="w-full py-20 h-screen ">
        <Border />
        <h1 className="text-7xl uppercase py-12 text-center text-[#953269]   font-bold">
          Service
        </h1>
        <p className="text-3xl text-center font-serif text-white/80">
          These are some of the services I offer. Reach out to me if I can help
          you with any!
        </p>

     <div className="flex gap-12 justify-center py-32 flex-wrap">
     {Services.map((ser) => (
          <>
            <div className="">
              <div className=" ">
                <Tilt className="w-52   ">
                  <div className="w-full">
                    <div className=" green-pink-gradient rounded-[16px] border-2 shadow-lg  shadow-[#ff8fcd4e] border-[#95326838]">
                      <div className="bg-[#95326838] flex flex-col justify-center items-center gap-3   min-h-[220px] rounded-[20px]">
                        <ser.icon size={50} />
                        <p className="text-lg px-4 text-center"> {ser.name}</p>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>
          </>
        ))}
     </div>
      </div>
    </>
  );
};

export default Service;
