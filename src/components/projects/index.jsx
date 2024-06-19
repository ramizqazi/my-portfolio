import ProjectsGrid from "./ProjectsGrid";

const getProjects = async () => {
  const response = await fetch('http://localhost:3000/api/projects', { method: 'GET' });

  return await response.json();
};

const Projects = async () => {
  const projects = await getProjects();

  return <ProjectsGrid projects={projects} />;
};

export default Projects;
