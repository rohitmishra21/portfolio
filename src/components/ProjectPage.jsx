import { Link } from "react-router-dom";
import Details from "../constants/ProjectDetails";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const params = useParams();

  const { id, img, name, KeyFeatures, tools, TechStack } = Details[
    params.id - 1
  ];

  return (
    <>
      <div className=" text-xl font-mono"></div>
      <div className=" xl:px-0 px-10">
        <div
          className="w-full h-[60vh] flex-col gap-10 flex justify-center items-center"
          key={id}
        >
          <h1 className="xl:text-6xl  text-4xl pt-8 font-bold">{name}</h1>
          <p className="text-2xl w-[80%] text-center">
            This page contains the case study of Crown Website Template which
            includes the Project Overview, Tools Used, and Live Links to the
            official product.
          </p>
          <Link className="border-2 shadow-lg font-semibold shadow-[#ff8fcd4e] border-[#95326838] rounded-full px-8 py-4 text-xl">
            Live Link
          </Link>
        </div>
        <div className="w-full flex flex-col  items-center">
          <div className="xl:w-[80%] py-10">
            <img className="w-full object-cover" src={img} alt="" />
          </div>

          <h1 className=" xl:w-1/2 w-full  py-6 font-semibold xl:text-6xl text-4xl">
            OverView
          </h1>
          <div className="xl:w-1/2 w-full  py-9 leading-normal xl:text-3xl ">
            {KeyFeatures.map((feature) => (
              <>
                <p>{feature}</p>
              </>
            ))}
          </div>
          <div className="xl:w-1/2  leading-normal xl:text-3xl ">
            {TechStack.map((Tech) => (
              <>
                <p>{Tech}</p>
              </>
            ))}
          </div>

          <div className="xl:w-1/2 pt-28">
            <h1 className="text-3xl font-bold">Tools Used</h1>
            <div className="flex gap-4 justify-start items-center flex-wrap py-9">
              {tools.map((tool) => (
                <>
                  <button className="border-2 capitalize font-medium shadow-lg shadow-[#ff8fcd4e] border-[#95326838] rounded-full px-8 py-4 text-xl">
                    {tool}
                  </button>
                </>
              ))}
            </div>
            <div className="pb-32  ">
              <h1 className="font-bold text-3xl py-16">See Live</h1>
              <div className="">
                <Link className="border-2 shadow-lg font-extrabold shadow-[#ff8fcd4e] border-[#95326838] rounded-full px-8 py-4 text-xl">
                  Project Link
                </Link>
                <Link
                  to="/"
                  className="border-2 xl:ml-8  shadow-lg font-extrabold shadow-[#ff8fcd4e] border-[#95326838] rounded-full px-8 py-4 text-xl"
                >
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
