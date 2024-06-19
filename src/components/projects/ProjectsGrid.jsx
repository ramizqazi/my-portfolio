'use client';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import ProjectsCategoryFilter from './ProjectsCategoryFilter';

const ProjectsGrid = ({ projects }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    let filtered = projects;

    if (query) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(project => project.category === category);
    }

    setFilteredProjects(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category, projects]);


  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects portfolio
        </p>
      </div>

      <div className="mt-5 sm:mt-5">
        <h3
          className="font-general-regular 
            text-center text-secondary-dark
            dark:text-ternary-light
            text-sm
            sm:text-sm
            mb-3">
          NOTE: The Projects listed here are all client projects, not practice/learning projects.
          <br />These are some of the projects I was allowed to list in my portfolio by my company.
        </h3>
        <h3
          className="font-general-regular 
            text-center text-secondary-dark
            dark:text-ternary-light
            text-md
            sm:text-xl
            mb-3">
          Search projects by title or filter by category
        </h3>
        <div
          className="flex flex-col sm:flex-row justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
          <div className="flex justify-between gap-2">
            <span
              className="
                hidden
                sm:block
                bg-primary-light
                dark:bg-ternary-dark
                p-2.5
                shadow-sm
                rounded-xl
                cursor-pointer
                ">
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={e => {
                setQuery(e.target.value)
              }}
              className="font-general-medium  pl-3 w-full sm:w-auto pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          <ProjectsCategoryFilter setCategory={setCategory} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {filteredProjects.map(project => (
          <ProjectSingle
            id={project._id}
            title={project.title}
            category={project.category}
            image={project.images && project.images[0]}
            key={project._id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
