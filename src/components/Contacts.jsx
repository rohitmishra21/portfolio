import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Border from "./Border";


const Contacts = () => {
  return (
    <>
      <Border />
      <div className="h-screen ">
        <h1 className="xl:text-7xl uppercase py-8 text-5xl   text-[#953269]   font-bold">
          contacts
        </h1>
        <div className="xl:flex  gap-24">
          <div className="">
            <form action="" className="flex flex-col xl:w-96 gap-10 py-10">
              <input
                type="text"
                className="py-4 px-2 bg-transparent border-2 shadow-lg  shadow-[#ff8fcd4e] border-[#95326838] rounded-full"
                placeholder="rohit mishra"
              />
              <input
                type="email"
                className="py-4 px-2 bg-transparent border-2 shadow-lg  shadow-[#ff8fcd4e] border-[#95326838] rounded-full"
                placeholder="rohit@gmail.com"
              />
              <textarea
                name="Type your message..."
                rows="13"
                className=" green-pink-gradient border-2 shadow-lg bg-transparent rounded-xl text-white/40 shadow-[#ff8fcd4e] p-2 border-[#95326838]"
                placeholder="Describe yourself here..."
                id=""
              ></textarea>
            </form>
          </div>
          <div className="text-white/70  xl:w-1/2 flex flex-col gap-3">
            <div className="py-10 mt-7 items-center text-lg xl:text-2xl  flex gap-3  h-20">
              <div className="border-2 shadow-lg  shadow-[#ff8fcd4e] border-[#95326838]  rounded-full p-2">
                <MdAlternateEmail xl:size={35} className="" />
              </div>

              <h1>rohitmishra27112005@gmail.com</h1>
            </div>
            <div className="py-10 w-full  items-center text-lg xl:text-2xl flex gap-3  h-20">
              <div className="border-2 shadow-lg  shadow-[#ff8fcd4e] border-[#95326838]  rounded-full p-2">
                <IoMdCall xl:size={35} className="" />
              </div>

              <h1>+91 940-783-4989</h1>
            </div>
            <div className="py-10  items-center text-lg xl:text-2xl flex gap-3  h-20">
              <div className="border-2 shadow-lg  shadow-[#ff8fcd4e] border-[#95326838]  rounded-full p-2">
                <FaLocationDot xl:size={35} className="" />
              </div>

              <h1>Bhopal, Madhya Pradesh</h1>
            </div>
          </div>
          <div className=" w-full py-10 xl:h-48">
            <div className="flex gap-10 items-end justify-center h-full">
              <a className="border-2 cursor-pointer shadow-lg hover:scale-90 transition-all duration-200  shadow-[#ff8fcd4e] border-[#95326838]  rounded-full p-2">
                <FaXTwitter xl:size={35} size={22} className="" />
              </a>

              <a
                href="https://github.com/rohitmishra21"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 shadow-lg cursor-pointer  hover:scale-90 shadow-[#ff8fcd4e] border-[#95326838]  rounded-full p-2">
                <FaGithub xl:size={35} size={22} className="" />
              </a>

              <a
                href="https://www.linkedin.com/in/rohit-mishra-657759298/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 shadow-lg  hover:scale-90  shadow-[#ff8fcd4e] border-[#95326838]  rounded-full p-2">
                <FaLinkedin xl:size={35} size={22} className="" />
              </a>

              <a
                href="https://www.instagram.com/rohitmishra11_27"
                target="_blank"
                rel="noopener noreferrer"

                className="border-2 shadow-lg cursor-pointer  hover:scale-90 shadow-[#ff8fcd4e] border-[#95326838]  rounded-full p-2">
                <FaInstagram xl:size={35} size={22} className="" />
              </a>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Contacts;
