import {motion} from "framer-motion"
import projects from "./ProjectsData";
import ProjectCard from "./ProjectCard";

type Props = {
    setSelectedPage: (value: string) => void;
};

const Projects = ({setSelectedPage}: Props) => {
  return (
    <section id="projects" className="">
      <motion.div 
      onViewportEnter={()=> setSelectedPage("projects")}
      >
        <div className="flex flex-wrap justify-center gap-28 pt-28 pb-60 w-3/5 mx-auto transition-all duration-300 sm:w-full sm:gap-20 xs:w-full xs:gap-4">
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} setSelectedPage={setSelectedPage}  />
        ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
