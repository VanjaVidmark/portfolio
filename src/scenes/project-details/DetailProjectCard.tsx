import { Project } from "../projects/ProjectsData";

type Props = {
  project: Project;
};

const DetailProjectCard = ({ project }: Props) => {
  if (!project) {
    return <p className="text-center text-black text-2xl mt-10">Project not found</p>;
  }

  return (
    <section id={`project-${project.id}`} className="relative flex w-screen h-screen">
      {/* LEFT SIDE - image */}
      <div className="w-1/2 h-full bg-blue-900 flex flex-col items-center justify-center p-12">
        <img 
          src={project.bigImage} 
          alt="img" 
          className="w-[80%] h-auto max-w-none object-cover" 
        />
      </div>

      {/* RIGHT SIDE  - text */}
      <div className="flex flex-col items-center justify-center p-12">
  <div className="bg-white p-8 shadow-lg flex flex-col items-center justify-center w-96">
    <h2 className="text-2xl font-semibold text-gray-800">{project.shortDescription}</h2>
    <p>{project.description}</p>
    <p>{project.techStack}</p>
  </div>
</div>

    </section>
  );
};

export default DetailProjectCard;
