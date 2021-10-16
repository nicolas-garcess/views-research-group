import React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { PROJECT } from '../../store/project';
import CustomInput from '../CustomInput';
import CustomLabel from '../CustomLabel';
import './index.css';

const ProjectInfo = () => {
  const slug = useParams();
  const { loading, error, data } = useQuery(PROJECT, {
    variables: { idProyecto: slug.id }
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div className="project-info">
      <div className="project-info__left">
        <div>
          <CustomLabel htmlFor="nombre" value="Nombre" />
          <CustomInput type="text" value={data.project.nombre} id="nombre" />
        </div>
        <div>
          <CustomLabel htmlFor="projectid" value="Id del proyecto" />
          <CustomInput type="text" value={data.project.idProyecto} id="projectid" />
        </div>
        <div>
          <CustomLabel htmlFor="description" value="Descripción" />
          <CustomInput type="text" value={data.project.descripcion} id="description" />
        </div>
        <div>
          <p className="field-name">Objetivo general</p>
          <div>
            <CustomLabel htmlFor="mainObjectiveId" value="Id ojetivo" />
            <CustomInput type="text" value={data.project.objetivos.objetivoGeneral.idObjetivo} id="mainObjectiveId" />
          </div>
          <div>
            <CustomLabel htmlFor="mainObjectiveDescription" value="Descripción" />
            <CustomInput type="text" value={data.project.objetivos.objetivoGeneral.descripcion} id="mainObjectiveDescription" />
          </div>
          <div>
            <CustomLabel htmlFor="mainObjectiveDone" value="¿Cumplido?" />
            <CustomInput type="checkbox" id="mainObjectiveDone" />
          </div>
        </div>
        <div>
          <p className="field-name">Objetivos específicos</p>
          {data.project.objetivos.objetivosEspecificos.map((objective, index) => (
            <div key={JSON.stringify(objective)}>
              <div>
                <CustomLabel htmlFor={`specificObjectiveId${index}`} value="Id ojetivo" />
                <CustomInput type="text" value={objective.idObjetivo} id={`specificObjectiveId${index}`} />
              </div>
              <div>
                <CustomLabel htmlFor={`mainObjectiveDescription${index}`} value="Descripción" />
                <CustomInput type="text" value={objective.descripcion} id={`mainObjectiveDescription${index}`} />
              </div>
              <div>
                <CustomLabel htmlFor={`mainObjectiveDone${index}`} value="¿Cumplido?" />
                <CustomInput type="checkbox" id={`mainObjectiveDone${index}`} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <CustomLabel htmlFor="budget" value="Presupuesto" />
          <CustomInput type="text" value={data.project.presupuesto} id="budget" />
        </div>
        <div>
          <CustomLabel htmlFor="beginDate" value="Fecha inicial" />
          <CustomInput type="date" value={data.project.fechaInicial} id="beginDate" />
        </div>
        <div>
          <CustomLabel htmlFor="endDate" value="Fecha final" />
          <CustomInput type="text" value={new Date(data.project.fechaFinal).toUTCString()} id="endDate" />
        </div>
      </div>
      <div className="project-info__right">
        <p>Hola</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
