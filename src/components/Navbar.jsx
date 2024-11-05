import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [visible, setvisible] = useState(true);

  const show = () => {
    setvisible((p) => !p);
  };

  useEffect(() => {
    if (setvisible === false) {
      gsap.from(".box", {
        duration: 3,
        stagger: 1,
        ease: "power1.out",
      });
    }
  }, []);

  if (visible) {
    gsap.to(".box", {
      x: 0,
      stagger: 1,
      ease: "circ.out",
      duration: 0.5,
      opacity: 0,
    });
    gsap.to(".icon", {
      rotate: 0,
    });
  } else {
    gsap.to(".box", {
      stagger: 1,
      ease: "circ.out",
      duration: 0.5,
      opacity: 1,
    });
    gsap.to(".icon", {
      rotate: 45,
    });
  }

  console.log(gsap);

  return (
    <>
      <div className="w-full hidden h-20 xl:flex justify-center xl:justify-end py-10 ">
        <div>
          <ul className="flex opacity-80 uppercase gap-10  ">
            <Link className="nav">about</Link>
            <Link to="skills" className="nav">
              Skills
            </Link>
            <Link to="allProject" className="nav">
              Project
            </Link>
            <Link to="service" className="nav">
              service
            </Link>
            <Link to="blog" className="nav">
              Blog
            </Link>
            <Link to="contact" className="nav">
              Contact
            </Link>
          </ul>
        </div>
      </div>
      <div className=" xl:hidden flex  h-20 items-center justify-end py-4">
        <div
          className="box items-center capitalize text-xs  w-full gap-3  h-full"
          style={{
            display: visible ? "none" : "flex",
          }}
        >
          <Link className="nav">about</Link>
          <Link to="skills" className="nav">
            Skills
          </Link>
          <Link to="allProject" className="nav">
            Project
          </Link>
          <Link to="service" className="nav">
            service
          </Link>
          <Link to="blog" className="nav">
            Blog
          </Link>
          <Link to="contact" className="nav">
            Contact
          </Link>
        </div>
        <FaPlus className="icon" size={25} onClick={show} />
      </div>
    </>
  );
};

export default Navbar;
