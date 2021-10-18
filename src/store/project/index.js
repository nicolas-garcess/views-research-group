import { gql } from 'apollo-boost';

export const CREATE_PROJECT = gql`
  mutation createProject(
    $idProyecto: String!,
    $nombre: String!,
    $descripcion: String!,
    $objetivos: ObjectivesInput!,
    $presupuesto: Float!,
    $fechaInicial: DateTime!,
    $fechaFinal: DateTime!,
    $directorProyecto: String!,
    $estaDisponible: Boolean!
    $estudiantes: [ProjectStudentInput]!,
    $investigadores: [ProjectResearcherInput]!,
    $notas: [NoteInput]!
    ) {
    createProject(input: {
      idProyecto: $idProyecto 
      nombre: $nombre
      descripcion: $descripcion
      objetivos: $objetivos
      presupuesto: $presupuesto
      fechaInicial: $fechaInicial
      fechaFinal: $fechaFinal
      directorProyecto: $directorProyecto
      estaDisponible: $estaDisponible
      estudiantes: $estudiantes
      investigadores: $investigadores
      notas: $notas
    }) {
      nombre
      idProyecto
    }
  }
`;

export const PROJECTS = gql`
  query getProjects {
    projects {
      idProyecto
      nombre
      descripcion
      presupuesto
      fechaInicial
      fechaFinal
      directorProyecto
      estaDisponible
      avance
      fase
    }
  }
`;

export const PROJECT = gql`
  query getProjectById($idProyecto: String!) {
    project(idProyecto: $idProyecto) {
      idProyecto
      nombre
      descripcion
      objetivos {
        objetivoGeneral {
          idObjetivo
          descripcion
          cumplido
        }
        objetivosEspecificos {
          idObjetivo
          descripcion
          cumplido
        }
      }
      presupuesto
      fechaInicial
      fechaFinal
      directorProyecto
      estaDisponible
      avance
      fase
      estudiantes {
        idEstudiante
        infoEstudiante {
          id
          nombre
          idProyecto
          email
          usuario
          carrera
          celular
          fechaIngreso
          activo
        }
        activoEnElProyecto
      }
      investigadores {
        idInvestigador
        infoInvestigador {
          id
          nombre
          idProyecto
          email
          usuario
          horasDedicacion
          activo
        }
        activoEnElProyecto
      }
      notas {
        idNota
        descripcion
      }
    }
  }
`;
