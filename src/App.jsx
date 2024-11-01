import React from "react";
import Hero from "./components/Hero";
import Computer from "./components/Computer";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Service from "./components/Service";

const App = () => {
  return (
    <div className="px-24">
      <Computer />
      <Hero />
      <Skills />
      <Project/>
      <Service/>
    </div>
  );
};

export default App;
