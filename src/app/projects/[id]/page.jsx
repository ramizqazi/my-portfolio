import ProjectGallery from '../../../components/project/ProjectGallery';
import ProjectHeader from '../../../components/project/ProjectHeader';
import ProjectInfo from '../../../components/project/ProjectInfo';

const getProject = async (id) => {
  const response = await fetch(`http://localhost:3000/api/projects/${id}`, { method: 'GET' });

  return await response.json();
};

const Project = async ({ params }) => {
  const { id } = params;
  const project = await getProject(id);

  return (
    <div className="container mx-auto">
      <ProjectHeader project={project} />
      <ProjectGallery project={project} />
      <ProjectInfo project={project} />
    </div>
  );
};

export default Project;
