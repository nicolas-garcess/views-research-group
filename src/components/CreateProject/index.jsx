import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import { CREATE_PROJECT } from '../../store/project';
import CustomInput from '../CustomInput';
import CustomLabel from '../CustomLabel';
import LogOut from '../LogOut';
import './index.css';

const initialStateProject = {
  idProyecto: '',
  nombre: '',
  descripcion: '',
  objetivos: {
    objetivoGeneral: {
      idObjetivo: '',
      descripcion: '',
      cumplido: false,
    },
    objetivosEspecificos: [{
      idObjetivo: '',
      descripcion: '',
      cumplido: false,
    }]
  },
  presupuesto: 0,
  fechaInicial: '',
  fechaFinal: '',
  directorProyecto: '',
  estaDisponible: true,
  estudiantes: [],
  investigadores: [],
  notas: [],
};

const CreateProject = () => {
  const [projectInfo, setProjectInfo] = useState(initialStateProject);
  const [createProject, { data, loading, error }] = useMutation(CREATE_PROJECT);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  const handleOnClick = () => {
    createProject({ variables: {} });
    console.log(data);
  };

  const handleOnblur = (e) => {
    const { name, value, id } = e.target;

    if (id === 'mainObjectiveId' || id === 'mainObjectiveDescription' || id === 'mainObjectiveDone') {
      setProjectInfo({
        ...projectInfo,
        objetivos: {
          ...projectInfo.objetivos,
          objetivoGeneral: {
            ...projectInfo.objetivos.objetivoGeneral,
            [name]: value,
          }
        },
      });
    } else if (id === 'specificObjectiveId' || id === 'specificObjectiveDescription' || id === 'specificObjectiveDone') {
      setProjectInfo({
        ...projectInfo,
        objetivos: {
          ...projectInfo.objetivos,
          objetivosEspecificos: [
            ...projectInfo.objetivos.objetivosEspecificos,
            {
              ...projectInfo.objetivos.objetivosEspecificos[0],
              [name]: value,
            }
          ]
        },
      });
    } else if (name === 'presupuesto') {
      setProjectInfo({
        ...projectInfo,
        [name]: Number(value)
      });
    } else if (name === 'fechaInicial' || name === 'fechaFinal') {
      const date = new Date(value);
      setProjectInfo({
        ...projectInfo,
        [name]: date.toISOString(),
      });
    } else if (name === 'fechaInicial' || name === 'fechaFinal') {
      const date = new Date(value);
      setProjectInfo({
        ...projectInfo,
        [name]: date.toISOString(),
      });
    } else if (name === 'idNota' || id === 'noteDescription') {
      setProjectInfo({
        ...projectInfo,
        notas: [
          ...projectInfo.notas,
          {
            ...projectInfo.notas[0],
            [name]: value,
          }
        ]
      });
    } else {
      setProjectInfo({
        ...projectInfo,
        [name]: value,
      });
    }

    console.log(projectInfo);
  };

  return (
    <div className="create-project">
      <LogOut />
      <form className="project-data">
        <div className="project-info__left">
          <div>
            <CustomLabel htmlFor="nombre" value="Nombre" />
            <CustomInput type="text" name="nombre" id="nombre" onBlur={handleOnblur} />
          </div>
          <div>
            <CustomLabel htmlFor="projectid" value="Id del proyecto" />
            <CustomInput type="text" name="idProyecto" id="projectid" onBlur={handleOnblur} />
          </div>
          <div>
            <CustomLabel htmlFor="description" value="Descripción" />
            <CustomInput type="text" name="descripcion" id="description" onBlur={handleOnblur} />
          </div>
          <div>
            <p className="field-name">Objetivo general</p>
            <div>
              <div>
                <CustomLabel htmlFor="mainObjectiveId" value="Id ojetivo" />
                <CustomInput type="text" name="idObjetivo" id="mainObjectiveId" onBlur={handleOnblur} />
              </div>
              <div>
                <CustomLabel htmlFor="mainObjectiveDescription" value="Descripción" />
                <CustomInput type="text" name="descripcion" id="mainObjectiveDescription" onBlur={handleOnblur} />
              </div>
              <div>
                <CustomLabel htmlFor="mainObjectiveDone" value="¿Cumplido?" />
                <CustomInput type="checkbox" name="cumplido" id="mainObjectiveDone" onBlur={handleOnblur} />
              </div>

            </div>
          </div>
          <div>
            <p className="field-name">Objetivos específicos</p>
            <div>
              <div>
                <CustomLabel htmlFor="specificObjectiveId" value="Id ojetivo" />
                <CustomInput type="text" name="idObjetivo" id="specificObjectiveId" onBlur={handleOnblur} />
              </div>
              <div>
                <CustomLabel htmlFor="specificObjectiveDescription" value="Descripción" />
                <CustomInput type="text" name="descripcion" id="specificObjectiveDescription" onBlur={handleOnblur} />
              </div>
              <div>
                <CustomLabel htmlFor="specificObjectiveDone" value="¿Cumplido?" />
                <CustomInput type="checkbox" name="cumplido" id="specificObjectiveDone" onBlur={handleOnblur} />
              </div>
            </div>
          </div>
          <div>
            <CustomLabel htmlFor="budget" value="Presupuesto" />
            <CustomInput type="text" name="presupuesto" id="budget" onBlur={handleOnblur} />
          </div>
          <div>
            <CustomLabel htmlFor="beginDate" value="Fecha inicial" />
            <CustomInput type="date" name="fechaInicial" id="beginDate" onBlur={handleOnblur} />
          </div>
          <div>
            <CustomLabel htmlFor="endDate" value="Fecha final" />
            <CustomInput type="date" name="fechaFinal" id="endDate" onBlur={handleOnblur} />
          </div>
          <div>
            <CustomLabel htmlFor="director" value="Director del proyecto" />
            <CustomInput type="text" name="director" id="director" onBlur={handleOnblur} />
          </div>
          <div>
            <CustomLabel htmlFor="isAvailable" value="¿Está disponible?" />
            <CustomInput type="checkbox" name="estaDisponible" id="isAvailable" onBlur={handleOnblur} />
          </div>
        </div>
        <div className="project-info__right">
          <div>
            <p className="field-name">Estudiantes</p>
            <div>
              <div>
                <CustomLabel htmlFor="studentId" value="Id estudiante" />
                <CustomInput type="text" name="idEstudiante" id="studentId" />
              </div>
              <div>
                <CustomLabel htmlFor="isStudentActive" value="¿Activo?" />
                <CustomInput type="checkbox" name="cumplido" id="isStudentActive" />
              </div>
            </div>
          </div>
          <div>
            <p className="field-name">Investigadores</p>
            <div>
              <div>
                <CustomLabel htmlFor="researcherId" value="Id investigador" />
                <CustomInput type="text" name="idInvestigador" id="researcherId" />
              </div>
              <div>
                <CustomLabel htmlFor="isResearcherActive" value="¿Activo?" />
                <CustomInput type="checkbox" name="cumplido" id="isResearcherActive" />
              </div>
            </div>
          </div>
          <div>
            <p className="field-name">Notas</p>
            <div>
              <div>
                <CustomLabel htmlFor="noteId" value="Id nota" />
                <CustomInput type="text" name="idNota" id="noteId" onBlur={handleOnblur} />
              </div>
              <div>
                <CustomLabel htmlFor="noteDescription" value="Descripción" />
                <CustomInput type="text" name="descripcion" id="noteDescription" onBlur={handleOnblur} />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="create-buttoncontainer">
        <button className="create-button" type="button" onClick={handleOnClick}>Crear proyecto</button>
      </div>
    </div>
  );
};

export default CreateProject;
