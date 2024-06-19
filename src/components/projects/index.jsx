import { client } from "../../../sanity/lib/client";
import ProjectsGrid from "./ProjectsGrid";

const Projects = async () => {
  const projects = await client.fetch(`*[_type=="project"]`);

  return <ProjectsGrid projects={projects} />;
};

export default Projects;
