import React from "react";
import Hero from "./components/Hero";
import Computer from "./components/Computer";
import Skills from "./components/Skills";



const App = () => {
  return (
    <div className="px-24">
      <Computer />
      <Hero />
       <Skills/>

    </div>
  );
};

export default App;
