import {motion} from "framer-motion"
import projects from "./ProjectsData";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <section id="projects" className="pt-60 md:pt-30">
      <motion.div>
        <div className="flex flex-wrap justify-center gap-28 pt-38 pb-60 w-3/5 mx-auto transition-all duration-300 sm:w-full sm:gap-20 xs:w-full xs:gap-4">
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
