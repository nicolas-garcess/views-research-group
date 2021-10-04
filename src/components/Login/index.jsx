import React from 'react';
import './index.css';

function Login() {
  return (
    <div className="login">
      <div className="container">
        <img src="/assets/images/coal.png" alt="coal" />
        <form className="form">
          <div className="form-upper">
            <label htmlFor="user">NOMBRE DE USUARIO</label>
            <input type="text" id="user" placeholder="nombre de usuario" />
            <label htmlFor="password">CONTRASEÑA</label>
            <input type="password" id="password" placeholder="contraseña" />
            <p>¿NO SE ENCUENTRA REGISTRADO?</p>
            <a href="https://www.google.com/">REGISTRARSE</a>
          </div>
          <div className="button">
            <button type="button">INICIAR SESIÓN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
