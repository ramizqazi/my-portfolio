import ProjectsGrid from "./ProjectsGrid";

const getProjects = async () => {
  const response = await fetch('https://my-portfolio-4xiyo1ux4-ramizqazis-projects.vercel.app/api/projects', { method: 'GET' });

  return response.json();
};

const Projects = async () => {
  const projects = await getProjects();

  return <ProjectsGrid projects={projects} />;
};

export default Projects;
