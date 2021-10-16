import React, { useState } from 'react';
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

const SingUp = () => {
  const [role, setRole] = useState('researcher');
  const [userInfo, setUserInfo] = useState(initialStateResearcher);
  console.log(userInfo);

  const handleUserTypeChange = (e) => {
    const type = e.target.value;

    if (type === 'investigador') {
      setRole('researcher');
      setUserInfo(initialStateResearcher);
    }

    setRole('student');
    setUserInfo(initialStateStudent);
  };

  const selectFieldsPerUser = () => {
    switch (role) {
      case 'researcher':
        return (
          <>
            <label htmlFor="workingHours">Horas de dedicación</label>
            <input className="input-signup" type="number" id="workingHours" placeholder="Horas de dedicación del investigador" />
          </>
        );
      case 'student':
        return (
          <>
            <label htmlFor="major">Carrera del estudiante</label>
            <input className="input-signup" type="string" id="major" placeholder="Ingresa la carrera del estudiante" />
            <label htmlFor="phoneNumber">Celular</label>
            <input className="input-signup" type="string" id="phoneNumber" placeholder="Celular del estudiante" />
            <label htmlFor="dateOfAdmission">Fecha de ingreso</label>
            <input className="input-signup" type="date" id="dateOfAdmission" placeholder="Fecha de ingreso del estudiante" />
          </>
        );
      default:
        return null;
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
            <label htmlFor="userId">Id del usuario</label>
            <input type="text" id="userId" placeholder="Ingresa un id para el usuario" />
            <label htmlFor="defproyecto">ID PROYECTO</label>
            <input type="text" id="name" placeholder="Ingresa el id del proyecto al que pertenecerá" />
            <label htmlFor="name">NOMBRES Y APELLIDOS</label>
            <input type="text" id="name" placeholder="Ingresa su nombre completo" />
            <label htmlFor="user">NOMBRE DE USUARIO</label>
            <input type="text" id="user" placeholder="Ingresa un nombre de usuario" />
            <label htmlFor="email">correo electrónico</label>
            <input type="email" id="email" placeholder="Ingresa su correo electrónico" />
            <label htmlFor="password">CONTRASEÑA</label>
            <input type="password" id="password" placeholder="Ingresa una contraseña" />
            {selectFieldsPerUser()}
          </div>
          <div className="button">
            <button type="button">REGISTRAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
