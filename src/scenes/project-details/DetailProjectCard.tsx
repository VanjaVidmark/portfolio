import { Project } from "../projects/ProjectsData";
import githubLogo from "@/assets/github-logo.png";

type Props = {
  project: Project;
};

const DetailProjectCard = ({ project }: Props) => {
  if (!project) {
    return <p className="text-center text-black text-2xl mt-10">Project not found</p>;
  }

  return (
    <section id={`project-${project.id}`} className="relative flex flex-col md:flex-row w-screen min-h-screen">
      {/* LEFT SIDE - image */}

      <div 
      className="w-full md:w-1/2 bg-blue-900 flex flex-col items-center justify-center p-12">
        <h1 className="text-5xl font-bold text-orange-400 leading-tight">
          {project.name}
        </h1>

        <div className="w-full">
          <img
            src={project.bigImage}
            alt="img"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* RIGHT SIDE - text */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-12">
        <div className="bg-white p-8 shadow-lg flex flex-col justify-center w-full max-w-lg space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{project.name}</h2>
        <h3 className="text-l font-light text-gray-500 mt-0">{project.description}</h3>

          <hr className="border-t border-gray-300" />
          <p>{project.intro}</p>
          <p>{project.functionality}</p>
          <p>{project.techStack}</p>

          {project.otherLink && (
            <a className="text-blue-600 hover:underline" href={project.otherLink} target="_blank" rel="noopener noreferrer">
              {project.otherLinkText}
            </a>
          )}

          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub Repository" className="w-8 h-8 mt-4" />
            </a>
          )}
        </div>
      </div>

    </section>
  );
};

export default DetailProjectCard;
