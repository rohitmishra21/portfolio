import React from "react";
import { tecnology } from "../constants";
import BallCanvas from "./Ball";
const Description = () => {
  return (
    <>
    <h1 className="px-40 text-6xl font-semibold pt-32 ">Skills</h1>
    <div className="flex py-10 justify-between w-full text-gray-300/50 px-20">
      <div className="w-1/2  ">
  
        <ul className="px-20 list-disc text-xl ">
          <li className="">
            HTML: Proficient in building structured and accessible web pages.
          </li>
          <br />
          <li>
            CSS: Skilled in styling responsive and visually appealing websites,
            including Flexbox and Grid layouts.
          </li>
          <br />

          <li>
            JavaScript: Strong understanding of JavaScript for creating dynamic
            web functionality.
          </li>
          <br />
          <li>
            React.js: Experienced in building interactive user interfaces with
            component-based architecture.
          </li>
          <br />
          <li>
            GSAP (GreenSock Animation Platform): Proficient in creating smooth
            animations and scroll-based interactions.
          </li>
          <br />
          <li>
            Framer Motion: Skilled in animating React components for intuitive
            user experiences.
          </li>
          <br />
          <li>
            Tailwind CSS: Expertise in utility-first CSS for fast and scalable
            styling.
          </li>
          <br />
          <li>
            {" "}
            Git & GitHub: Version control experience for managing code and
            collaborating on projects.
          </li>
        </ul>
      </div>
      <div className="h-96 flex gap-10 w justify-center flex-wrap pl-32  w-1/2  ">
        {tecnology.map((tech) => (
          <div className="w-28 h-28 " key={tech.name}>
            <BallCanvas icon={tech.img} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Description;
