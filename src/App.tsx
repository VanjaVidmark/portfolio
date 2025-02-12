import Navbar from "@/scenes/navbar"
import { useState } from "react"
import Home from "@/scenes/home";
import Projects from "@/scenes/projects";
import ProjectDetails from "./scenes/project-details";
import Contact from "./scenes/contact";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <>
    <div className='bg-blue-900'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <ProjectDetails/>
      <Contact setSelectedPage={setSelectedPage} />
  </div>

    </>
  )
}

export default App
