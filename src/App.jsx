import Hero from "./components/Hero";
import Computer from "./components/Computer";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Service from "./components/Service";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";

const App = () => {
  return (
    <div className="xl:px-24 px-6 ">
      <Computer />
      <Hero />
      <Skills />
      <Project />
      <Service />
      <Blog />
      <Contacts />
    </div>
  );
};

export default App;
