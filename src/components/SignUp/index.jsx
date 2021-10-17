import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import CustomInput from '../CustomInput';
import CustomLabel from '../CustomLabel';
import './index.css';

const initialStateResearcher = {
  id: '',
  nombre: '',
  idProyecto: '',
  email: '',
  usuario: '',
  contrasena: '',
  horasDedicacion: 8,
  activo: true,
};

const initialStateStudent = {
  id: '',
  nombre: '',
  idProyecto: '',
  email: '',
  usuario: '',
  contrasena: '',
  carrera: '',
  celular: '',
  fechaIngreso: '',
  activo: true,
};

const CREATE_RESEARCHER = gql`
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

const CREATE_STUDENT = gql`
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

const SignUp = () => {
  const [role, setRole] = useState('researcher');
  const [userInfo, setUserInfo] = useState(initialStateResearcher);
  const mutation = role === 'researcher' ? CREATE_RESEARCHER : CREATE_STUDENT;
  const [createStudent, { data, loading, error }] = useMutation(mutation);
  console.log(data);

  const handleOnblur = (e) => {
    const tag = e.target;

    if (tag.name === 'horasDedicacion') {
      setUserInfo({
        ...userInfo,
        [tag.name]: Number(tag.value),
      });
    } else if (tag.name === 'fechaIngreso') {
      const date = new Date(tag.value);
      setUserInfo({
        ...userInfo,
        [tag.name]: date.toISOString(),
      });
    } else {
      setUserInfo({
        ...userInfo,
        [tag.name]: tag.value,
      });
    }

    console.log(userInfo);
  };

  const handleOnClick = () => {
    console.log(userInfo);
    createStudent({ variables: { ...userInfo } });
  };

  const selectFieldsPerUser = () => {
    switch (role) {
      case 'researcher':
        return (
          <>
            <div>
              <CustomLabel className="label-signup" htmlFor="workingHours" value="HORAS DE DEDICACIÓN" />
              <CustomInput type="number" id="workingHours" name="horasDedicacion" placeholder="Horas de dedicación del investigador" min="8" max="40" className="input-signup" onBlur={handleOnblur} />
            </div>
          </>
        );
      case 'student':
        return (
          <>
            <div>
              <CustomLabel className="label-signup" htmlFor="major" value="CARRERA" />
              <CustomInput type="text" id="major" name="carrera" placeholder="Ingresa la carrera del estudiante" className="input-signup" onBlur={handleOnblur} />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="phoneNumber" value="CELULAR" />
              <CustomInput type="text" id="phoneNumber" name="celular" placeholder="Ingresa el celular del estudiante" className="input-signup" onBlur={handleOnblur} />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="dateOfAdmission" value="FECHA DE INGRESO" />
              <CustomInput type="date" id="dateOfAdmission" name="fechaIngreso" placeholder="Fecha de ingreso del estudiante" className="input-signup" onBlur={handleOnblur} />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const handleUserTypeChange = (e) => {
    const type = e.target.value;

    if (type === 'investigador') {
      setRole('researcher');
      setUserInfo(initialStateResearcher);
    } else {
      setRole('student');
      setUserInfo(initialStateStudent);
    }
  };

  if (loading) return 'Submitting...';
  if (error) return `${JSON.stringify(error)}`;

  return (
    <div className="register">
      <div className="container">
        <img src="/assets/images/coal.png" alt="coal" />
        <form className="form-signup">
          <div className="form-signup__upper">
            <label htmlFor="role">ROL:</label>
            <select id="role" form="carform" onChange={handleUserTypeChange}>
              <option value="investigador">INVESTIGADOR</option>
              <option value="estudiante">ESTUDIANTE</option>
            </select>
            <div>
              <CustomLabel className="label-signup" htmlFor="userId" value="Id del usuario" />
              <CustomInput type="text" id="userId" name="id" placeholder="Ingresa un id para el usuario" className="input-signup" onBlur={handleOnblur} />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="defproyecto" value="ID PROYECTO" />
              <CustomInput type="text" id="defproyecto" name="idProyecto" placeholder="Ingresa el id del proyecto al que pertenecerá" className="input-signup" onBlur={handleOnblur} />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="userName" value="NOMBRES Y APELLIDOS" />
              <CustomInput type="text" id="userName" name="nombre" placeholder="Ingresa su nombre completo" className="input-signup" onBlur={handleOnblur} />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="user" value="NOMBRE DE USUARIO" />
              <CustomInput type="text" id="user" name="usuario" placeholder="Ingresa un nombre de usuario" className="input-signup" onBlur={handleOnblur} />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="email" value="CORREO ELECTRÓNICO" />
              <CustomInput type="email" id="email" name="email" placeholder="Ingresa su correo electrónico" className="input-signup" onBlur={handleOnblur} />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="password" value="CONTRASEÑA" />
              <CustomInput type="password" id="password" name="contrasena" placeholder="Ingresa una contraseña" className="input-signup" onBlur={handleOnblur} />
            </div>
            {role && selectFieldsPerUser()}
          </div>
          <div className="form-signup__down">
            <button type="button" className="signup-button" onClick={() => handleOnClick()}>REGISTRAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
