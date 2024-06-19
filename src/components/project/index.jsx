import ProjectGallery from './ProjectGallery';
import ProjectHeader from './ProjectHeader';
import ProjectInfo from './ProjectInfo';

const getProject = async (id) => {
  const response = await fetch(`http://localhost:3000/api/projects/${id}`, { method: 'GET' });

  return await response.json();
};

const Project = async ({ id }) => {
  const project = await getProject(id);

  return (
    <div>
      <ProjectHeader project={project} />
      <ProjectGallery project={project} />
      <ProjectInfo project={project} />
    </div>
  );
};

export default Project;
