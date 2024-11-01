import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import cards from "../constants/cardData";
import './style.css'
const Card = () => {

  return (
    <>
      <div className="w-full   py-2 gap-7 flex overflow-x-hidden flex-nowrap whitespace-nowrap">
        {cards.map((card, index) => (
          <>
          

            <div className="contaner">
              <div className="slider-contaner ">
              <Tilt className="w-40  whitespace-nowrap inline-block " key={card.name}>
              <div className="w-full">
                <motion.div className=" green-pink-gradient rounded-[16px] border-2 shadow-lg  shadow-[#ff8fcd4e] border-[#95326838]">
                  <div className="bg-[#95326838] flex flex-col justify-center items-center   min-h-[170px] rounded-[20px]">
                    <img src={card.img} className="w-20" alt="" />
                  
                  </div>
                </motion.div>
              </div>
            </Tilt>
              </div>
            </div>
            
          </>
        ))}
      </div>
    </>
  );
};

export default Card;
