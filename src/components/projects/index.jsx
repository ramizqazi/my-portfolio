import { client } from "../../../sanity/lib/client";
import ProjectsGrid from "./ProjectsGrid";

// We are doing server side fetching and client side rendering to skip the loader

const Projects = async () => {
  const projects = await client.fetch(`*[_type=="project"]`);

  return <ProjectsGrid projects={projects} />;
};

export default Projects;
