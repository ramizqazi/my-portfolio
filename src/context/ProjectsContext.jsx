'use client';
import {InfinitySpin} from 'react-loader-spinner';
import {useState, useEffect, createContext} from 'react';
import {useGetProjects} from '../../sanity/lib/queries';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = ({children}) => {
  const [projects, setProjects] = useState([]);
  const [searchProject, setSearchProject] = useState('');
  const [selectProject, setSelectProject] = useState('');
  const {data, isLoading} = useGetProjects();

  useEffect(() => {
    if (data?.length > 0) {
      setProjects(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.length]);

  // Search projects by project title
  const searchProjectsByTitle = projects.filter(item => {
    const result = item.title
      .toLowerCase()
      .includes(searchProject.toLowerCase())
      ? item
      : searchProject === ''
      ? item
      : '';
    return result;
  });

  // Select projects by project category
  const selectProjectsByCategory = projects.filter(item => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
      }}>
      {!isLoading ? (
        children
      ) : (
        <div className="flex justify-center">
          <InfinitySpin width="200" color="#6366f1" />
        </div>
      )}
    </ProjectsContext.Provider>
  );
};
