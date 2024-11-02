import React from "react";
import bloges from "../constants/blogData";
const Blog = () => {
  return (
    <div className="h-screen ">
      <h1 className="text-7xl uppercase py-8 text-center text-[#953269]   font-bold">
        Blog
      </h1>
      <div className="flex gap-6 flex-wrap justify-center py-6">
        {bloges.map((blog) => (
          <>
            <div className=" green-pink-gradient border-2 shadow-lg w-96 shadow-[#ff8fcd4e] border-[#95326838]">
              <div className=" overflow-hidden gap-3   h-[450px] ">
                <div className="h-1/2 w-full flex justify-center items-center">
                  <img
                    className="object-cover blur-[2px] h-full w-full object-center  hover:blur-0 transition-all duration-300 hover:scale-90"
                    src={blog.img}
                    alt=""
                  />
                </div>
                <div className="h-1/2 p-8 py-12 ">
                  <h1 className="text-lg font-semibold">{blog.date}</h1>
                  <h1 className="font-mono capitalize font-bold text-xl">
                    {blog.heading}
                  </h1>
                  <h1 className="font-mono capitalize text-xl">{blog.des}</h1>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex justify-end py-10">
          <button className="px-8 py-3 hover:-translate-y-3 transition-all duration-200 shadow-lg s bg-[#953269] rounded-lg font-bold">
            Seen all
          </button>
        </div>
    </div>
  );
};

export default Blog;
