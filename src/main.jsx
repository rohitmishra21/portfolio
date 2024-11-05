import { StrictMode } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProjectPage from "./components/ProjectPage.jsx";
import MyProject from "./components/MyProject.jsx";
import MyprojectContent from "./components/MyprojectContent.jsx";
import Skills from "./components/Skills.jsx";
import Service from "./components/Service.jsx";
import Blog from "./components/Blog.jsx";
import Contacts from "./components/Contacts.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="pro/:id" element={<ProjectPage />} />
      <Route path="allProject" element={<MyProject />} />
      <Route path="allProject/my/:id" element={<MyprojectContent />} />
      <Route path="skills" element={<Skills />} />
      <Route path="service" element={<Service />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contacts />} />
    </>
  )
);

function Layout() {
  return (
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout />
  </StrictMode>
);
