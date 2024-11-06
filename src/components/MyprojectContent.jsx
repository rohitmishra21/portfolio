import information from "../constants/ProjectInfo";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const MyprojectContent = () => {
  const params = useParams();
  const { name, id, img, overView, tools } = information[params.id - 1];

  console.log(img);

  return (
    <>
      <div className="px-20 text-xl font-mono"></div>
      <div className="">
        <div
          className="w-full  min-h-[60vh] flex-col gap-10 flex justify-center items-center"
          key={id}
        >
          <h1 className="text-6xl font-bold">{name}</h1>
          <p className="text-2xl w-[80%] text-center">
            This page contains the case study of Crown Website Template which
            includes the Project Overview, Tools Used, and Live Links to the
            official product.
          </p>
          <Link className="border-2 shadow-lg font-semibold shadow-[#ff8fcd4e] border-[#95326838] rounded-full px-8 py-4 text-xl">
            Live Link
          </Link>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="xl:w-[80%]">
            <img className="w-full object-cover" src={img} alt="" />
          </div>

          <div className="xl:w-1/2 w-full px-2  min-h-[65vh] text-2xl ">
            {overView}
          </div>

          <div className="xl:w-1/2 px-2 h-[90vh] xl:h-fit">
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
            <div className="pb-32">
              <h1 className="font-bold text-3xl py-16">See Live</h1>
              <Link className="border-2 shadow-lg font-extrabold shadow-[#ff8fcd4e] border-[#95326838] rounded-full px-8 py-4 text-xl">
                Project Link
              </Link>
              <Link
                to="/"
                className="border-2 xl:ml-8 shadow-lg font-extrabold shadow-[#ff8fcd4e] border-[#95326838] rounded-full px-8 py-4 text-xl"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyprojectContent;
