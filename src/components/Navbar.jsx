import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [visible, setvisible] = useState(true);

  const show = () => {
    setvisible((prev) => !prev);
  };

  useEffect(() => {
    // Ensure elements exist before animating
    if (!visible) {
      gsap.to(".box", {
        opacity: 1,
        duration: 0.5,
        ease: "circ.out",
        stagger: 0.2,
        display: "flex",
      });
      gsap.to(".icon", {
        rotate: 45,
        duration: 0.2,
      });
    } else {
      gsap.to(".box", {
        opacity: 0,
        duration: 0.5,
        ease: "circ.out",
        stagger: 0.2,
        onComplete: () => {
          document.querySelector(".box").style.display = "none";
        },
      });
      gsap.to(".icon", {
        rotate: 0,
        duration: 0.2,
      });
    }
  }, [visible]); // `visible` के आधार पर useEffect ट्रिगर होगा

  return (
    <div className="flex h-20 items-center justify-end py-4">
      <div
        className="box items-center capitalize text-xs xl:text-xl xl:gap-12 w-full gap-3 h-full"
        style={{
          display: visible ? "none" : "flex",
        }}
      >
        <a
          href="https://rohitmishra.my.canva.site/"
          className="py-2 px-8 bg-transparent border-2 shadow-lg shadow-[#ff8fcd4e] border-[#95326838] rounded-full"
        >
          resume
        </a>
      </div>
      <FaPlus className="icon cursor-pointer relative z-20" size={25} onClick={show} />
    </div>
  );
};

export default Navbar;
