import AllData from "../constants/AllProjectData";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop ";

const MyProject = () => {
  return (
    <div className="py-20">
      <ScrollToTop />
      <h1 className="text-5xl pb-16 font-mono font-semibold text-center">
        My All Project
      </h1>
      <div className="w-full flex gap-6 items-center flex-wrap justify-center min-h-screen ">
        {AllData.map((data) => (
          <>
            <div className=" flex flex-col justify-center items-center">
              <img
                src={data.img}
                className="w-full h-full object-cover"
                alt=""
              />
              <a
                href={data?.liveLink}
                className="border-2 capitalize font-medium shadow-lg shadow-[#ff8fcd4e] border-[#95326838] rounded-full px-8 py-4 text-xl"
              >
                Live Link
              </a>
            </div>
          </>
        ))}
      </div>
      <div className="flex justify-end items-end p-11">
        <Link
          to="/"
          className="border-2 ml-8 shadow-lg font-extrabold shadow-[#ff8fcd4e] border-[#95326838] rounded-full px-8 py-4 text-xl"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default MyProject;
