import projects from "../constants/ProjectData";
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <div className="">
        <h1 className="xl:text-7xl text-5xl uppercase text-center py-16  text-[#953269]   font-bold">
          Project
        </h1>
        {projects.map((project) => (
          <>
            <div
              className={`h-[70vh]  sm:flex  xl:w-full    ${project.row} xl:pr-20 xl:items-center  w-full`}
            >
              <div className=" xl:w-1/2 w-full xl:h-[100%] ">
                <img
                  src={project.img}
                  className="xl:h-full w-full  object-cover"
                  alt=""
                />
              </div>

              <div className=" flex-col  flex justify-cente xl:px-10 items-start  gap-10 xl:w-1/2  xl:h-[70%] ">
                <h1 className="xl:text-4xl sm:text-4xl text-3xl text-[#fd5fb6]  font-medium uppercase">
                  {project.name}
                </h1>
                <p className="sm:text-lg">{project.para}</p>
                <Link
                  to={{ pathname: `pro/${project.id}` }}
                  className="xl:px-8 xl:py-3 hidden xl:block px-4 py-2 hover:-translate-y-3 transition-all duration-200 shadow-lg  bg-[#953269] rounded-lg font-bold"
                >
                  CASE STUDTY
                </Link>
              </div>
            </div>
          </>
        ))}
        <div className="flex sm:mt-9 justify-end">
          <Link
            to="allProject"
            className="px-8  py-3 hover:-translate-y-3 transition-all duration-200 shadow-lg  bg-[#953269] rounded-lg font-bold"
          >
            Seen all
          </Link>
        </div>
      </div>
    </>
  );
}

export default Project;
