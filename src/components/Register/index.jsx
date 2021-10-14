import React from 'react';
import './index.css';

function Register() {
  return (
    <div className="register">
      <div className="container">
        <img src="/assets/images/coal.png" alt="coal" />
        <form className="form">
          <div className="form-upper">
            <label htmlFor="role">ROL:</label>
            <select id="role" form="carform">
              <option value="investigador">INVESTIGADOR</option>
              <option value="estudiante">ESTUDIANTE</option>
            </select>
            <label htmlFor="defproyecto">ID PROYECTO</label>
            <input type="text" id="name" placeholder="id proyecto" />
            <label htmlFor="name">NOMBRES Y APELLIDOS</label>
            <input type="text" id="name" placeholder="nombres y apellidos" />
            <label htmlFor="user">NOMBRE DE USUARIO</label>
            <input type="text" id="user" placeholder="nombre de usuario" />
            <label htmlFor="password">CONTRASEÑA</label>
            <input type="password" id="password" placeholder="contraseña" />
          </div>
          <div className="button">
            <button type="button">REGISTRAR</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
