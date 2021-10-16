import { gql } from 'apollo-boost';

export const RESEARCHERS = gql`
  query getResearchers {
    researchers {
      id
      nombre
      email
      usuario
    }
  }
`;

export const RESEARCHER = gql`
  query getResearcherById($id: String!) {
    researcher(id: $id) {
      id
      nombre
      idProyecto
      email
      usuario
      horasDedicacion
      activo
    }
  }
`;

export const STUDENTS = gql`
  query getStudents {
    students {
      id
      nombre
      email
      usuario
    }
  }
`;

export const STUDENT = gql`
  query getStudentById($id: String!) {
    student(id: $id) {
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
  }
`;
