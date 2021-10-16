import React from 'react';
import { useQuery } from 'react-apollo';
import { PROJECTS } from '../../store/project';
import ProjectCard from '../ProjectCard';
import './index.css';

const Projects = () => {
  const { loading, error, data } = useQuery(PROJECTS);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div className="projects">
      <h1>Proyectos</h1>
      <div className="projects-container">
        {
          data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
