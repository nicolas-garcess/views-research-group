import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const PROJECTS = gql`
  query getProjects {
    projects {
      idProyecto
      nombre
      descripcion
    }
  }
`;

const Projects = () => {
  const { loading, error, data } = useQuery(PROJECTS);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  return data.projects.map((project) => (
    <div key={project.idProyecto}>
      <p>
        Nombre:
        {' '}
        {project.nombre}
      </p>
      <p>
        Descripcion:
        {' '}
        {project.descripcion}
      </p>
    </div>
  ));
};

export default Projects;
