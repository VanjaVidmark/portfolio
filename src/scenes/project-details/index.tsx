import projects from "../projects/ProjectsData";
import DetailProjectCard from "./DetailProjectCard";

type Props = {
};

const ProjectDetails = ({}: Props) => {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="mb-12">
          <DetailProjectCard project={project} />
        </div>
      ))}
    </>
  );
};

export default ProjectDetails;
