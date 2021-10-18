import { gql } from 'apollo-boost';

export const CREATE_RESEARCHER = gql`
  mutation createResearcher(
    $id: String!,
    $nombre: String!,
    $idProyecto: String!,
    $email: String!,
    $usuario: String!,
    $contrasena: String!,
    $horasDedicacion: Int!,
    $activo: Boolean!) {
    createResearcher(input: {
      id: $id
      nombre: $nombre
      idProyecto: $idProyecto
      email: $email
      usuario: $usuario
      contrasena: $contrasena
      horasDedicacion: $horasDedicacion
      activo: $activo
    }) {
      id
      nombre
      idProyecto
      email
    }
  }
`;

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

export const CREATE_STUDENT = gql`
  mutation createStudent(
    $id: String!,
    $nombre: String!,
    $idProyecto: String!,
    $email: String!,
    $usuario: String!,
    $contrasena: String!,
    $carrera: String!,
    $celular: String!,
    $fechaIngreso: DateTime!,
    $activo: Boolean!) {
    createStudent(input: {
      id: $id
      nombre: $nombre
      idProyecto: $idProyecto
      email: $email
      usuario: $usuario
      contrasena: $contrasena
      carrera: $carrera
      celular: $celular
      fechaIngreso: $fechaIngreso
      activo: $activo
    }) {
      id
      nombre
      idProyecto
      email
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
