import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

const ProjectCard = ({ project }) => {
  const history = useHistory();

  const handlePressProject = () => {
    history.push(`proyecto/${project.idProyecto}`);
  };

  return (
    <div className="project" onClick={() => handlePressProject()} role="button" tabIndex={0} onKeyPress={() => handlePressProject()}>
      <p className="project__label">
        Nombre:
        {' '}
        <span>{project.nombre}</span>
      </p>
      <p className="project__label">
        Identificador del proyecto:
        {' '}
        <span>{project.idProyecto}</span>
      </p>
      <p className="project__label">
        Descripción:
        {' '}
        <span>{project.descripcion}</span>
      </p>
      <p className="project__label">
        Presupuesto:
        {' '}
        <span>{project.presupuesto}</span>
      </p>
      <p className="project__label">
        Fecha inicial:
        {' '}
        <span>{project.fechaInicial}</span>
      </p>
      <p className="project__label">
        Fecha final:
        {' '}
        <span>{project.fechaFinal}</span>
      </p>
      <p className="project__label">
        Director del proyecto:
        {' '}
        <span>{project.directorProyecto}</span>
      </p>
      <p className="project__label">
        Activo:
        {' '}
        <span>{project.estaDisponible ? 'Sí' : 'No'}</span>
      </p>
      <p className="project__label">
        Avance:
        {' '}
        <span>
          {project.avance}
          %
        </span>
      </p>
      <p className="project__label">
        Fase:
        {' '}
        <span>{project.fase}</span>
      </p>
    </div>
  );
};

export default ProjectCard;
