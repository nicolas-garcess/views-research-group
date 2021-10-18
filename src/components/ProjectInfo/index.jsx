import React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { PROJECT } from '../../store/project';
import CustomInput from '../CustomInput';
import CustomLabel from '../CustomLabel';
import LogOut from '../LogOut';
import { parseDate } from '../../helpers/utils';
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
      <LogOut />
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
          <CustomInput type="date" value={parseDate(data.project.fechaInicial)} id="beginDate" />
        </div>
        <div>
          <CustomLabel htmlFor="endDate" value="Fecha final" />
          <CustomInput type="date" value={parseDate(data.project.fechaFinal)} id="endDate" />
        </div>
        <div>
          <CustomLabel htmlFor="director" value="Director del proyecto" />
          <CustomInput type="text" value={data.project.directorProyecto} id="director" />
        </div>
        <div>
          <CustomLabel htmlFor="isAvailable" value="¿Está disponible?" />
          <CustomInput type="checkbox" id="isAvailable" />
        </div>
        <div>
          <CustomLabel htmlFor="progress" value="Avance" />
          <CustomInput type="text" value={`${data.project.avance}%`} id="progress" readOnly />
        </div>
        <div>
          <CustomLabel htmlFor="phase" value="Fase" />
          <CustomInput type="text" value={data.project.fase} id="phase" readOnly />
        </div>
      </div>
      <div className="project-info__right">
        <div>
          <p className="field-name">Estudiantes</p>
          {data.project.estudiantes.map((student, index) => (
            <div key={student.idEstudiante}>
              <div>
                <CustomLabel htmlFor={`studentId${index}`} value="Id estudiante" />
                <CustomInput type="text" value={student.idEstudiante} id={`studentId${index}`} />
              </div>
              <div>
                <CustomLabel htmlFor={`studentName${index}`} value="Nombre" />
                <CustomInput type="text" value={student.infoEstudiante.nombre} id={`studentName${index}`} />
              </div>
              <div>
                <CustomLabel htmlFor={`studentEmail${index}`} value="Correo electrónico" />
                <CustomInput type="text" value={student.infoEstudiante.email} id={`studentEmail${index}`} />
              </div>
              <div>
                <CustomLabel htmlFor={`isActive${index}`} value="¿Activo?" />
                <CustomInput type="checkbox" id={`isActive${index}`} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="field-name">Investigadores</p>
          {data.project.investigadores.map((researcher, index) => (
            <div key={researcher.idInvestigador}>
              <div>
                <CustomLabel htmlFor={`researcherId${index}`} value="Id investigador" />
                <CustomInput type="text" value={researcher.idInvestigador} id={`researcherId${index}`} />
              </div>
              <div>
                <CustomLabel htmlFor={`researcherName${index}`} value="Nombre" />
                <CustomInput type="text" value={researcher.infoInvestigador.nombre} id={`researcherName${index}`} />
              </div>
              <div>
                <CustomLabel htmlFor={`researcherEmail${index}`} value="Correo electrónico" />
                <CustomInput type="text" value={researcher.infoInvestigador.email} id={`researcherEmail${index}`} />
              </div>
              <div>
                <CustomLabel htmlFor={`isActive${index}`} value="¿Activo?" />
                <CustomInput type="checkbox" id={`isActive${index}`} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="field-name">Notas</p>
          {data.project.notas.map((note, index) => (
            <div key={JSON.stringify(note)}>
              <div>
                <CustomLabel htmlFor={`noteId${index}`} value="Id nota" />
                <CustomInput type="text" value={note.idNota} id={`noteId${index}`} />
              </div>
              <div>
                <CustomLabel htmlFor={`noteDescription${index}`} value="Descripción" />
                <CustomInput type="text" value={note.descripcion} id={`noteDescription${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
