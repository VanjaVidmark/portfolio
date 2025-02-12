import projects from "../projects/ProjectsData";
import DetailProjectCard from "./DetailProjectCard";

type Props = {
};

const ProjectDetails = ({}: Props) => {

  return (
    <>
    {projects.map((project) => (
      <DetailProjectCard key={project.id} project={project} />
    ))}
    </>
  );
};

export default ProjectDetails;
