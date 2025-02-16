import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home";
import Projects from "@/scenes/projects";
import ProjectDetails from "./scenes/project-details";
import Contact from "./scenes/contact";

function App() {
  return (
    <div className='bg-blue-900'>
      <Navbar />
      <Home  />
      <Projects />
      <ProjectDetails/>
      <Contact />
    </div>
  )
}

export default App
