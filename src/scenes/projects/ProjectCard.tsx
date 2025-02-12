import AnchorLink from "react-anchor-link-smooth-scroll";
import { Project } from "./ProjectsData";

type Props = {
  project: Project;
  setSelectedPage: (value: string) => void;
};

const ProjectCard = ({project, setSelectedPage} : Props) => {

  return (
    <AnchorLink
      className="w-60 h-88 bg-white overflow-hidden shadow-lg text-center pt-2 cursor-pointer hover:scale-105 transition duration-300"
      href={`#project-${project.id}`}
      onClick={() => setSelectedPage(`project-${project.id}`)}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-5/6 h-48 object-cover border-2 border-black mx-auto"
      />
      <div className="pt-2 px-4 text-left">
        <h2 className="text-lg font-bold text-black">{project.name.toUpperCase()}</h2>
        <p className="text-gray-700 text-sm pt-2">{project.shortDescription}</p>
      </div>
      <div className="flex justify-end items-center pr-4 mt-4">
      {project.logo && <img src={project.logo} alt="Logo" className="h-10" />}
    </div>

    </AnchorLink>
  );
};

export default ProjectCard;
