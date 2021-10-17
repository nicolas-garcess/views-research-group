import React, { useState } from 'react';
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
  fechaIngreso: new Date(),
  activo: true,
};

const SignUp = () => {
  const [role, setRole] = useState('researcher');
  const [userInfo, setUserInfo] = useState(initialStateResearcher);
  console.log(userInfo);

  const selectFieldsPerUser = () => {
    switch (role) {
      case 'researcher':
        return (
          <>
            <div>
              <CustomLabel className="label-signup" htmlFor="workingHours" value="HORAS DE DEDICACIÓN" />
              <CustomInput type="number" id="workingHours" placeholder="Horas de dedicación del investigador" className="input-signup" />
            </div>
          </>
        );
      case 'student':
        return (
          <>
            <div>
              <CustomLabel className="label-signup" htmlFor="major" value="CARRERA" />
              <CustomInput type="text" id="major" placeholder="Ingresa la carrera del estudiante" className="input-signup" />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="phoneNumber" value="CELULAR" />
              <CustomInput type="text" id="phoneNumber" placeholder="Ingresa el celular del estudiante" className="input-signup" />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="dateOfAdmission" value="FECHA DE INGRESO" />
              <CustomInput type="text" id="dateOfAdmission" placeholder="Fecha de ingreso del estudiante" className="input-signup" />
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
              <CustomInput type="text" id="userId" placeholder="Ingresa un id para el usuario" className="input-signup" />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="defproyecto" value="ID PROYECTO" />
              <CustomInput type="text" id="defproyecto" placeholder="Ingresa el id del proyecto al que pertenecerá" className="input-signup" />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="userName" value="NOMBRES Y APELLIDOS" />
              <CustomInput type="text" id="userName" placeholder="Ingresa su nombre completo" className="input-signup" />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="user" value="NOMBRE DE USUARIO" />
              <CustomInput type="text" id="user" placeholder="Ingresa un nombre de usuario" className="input-signup" />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="email" value="CORREO ELECTRÓNICO" />
              <CustomInput type="email" id="email" placeholder="Ingresa su correo electrónico" className="input-signup" />
            </div>
            <div>
              <CustomLabel className="label-signup" htmlFor="password" value="CONTRASEÑA" />
              <CustomInput type="password" id="password" placeholder="Ingresa una contraseña" className="input-signup" />
            </div>
            {role && selectFieldsPerUser()}
          </div>
          <div className="form-signup__down">
            <button type="button" className="signup-button">REGISTRAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
