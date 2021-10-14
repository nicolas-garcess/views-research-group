import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/users';
import './index.css';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const { loginResponse } = useSelector((state) => (state.users));
  const [loginData, setLoginData] = useState(initialState);
  console.log(loginResponse);

  const handleOnblur = (e) => {
    const tag = e.target;

    if (tag.name === 'password' && tag.value.length > 6 && tag.value.length <= 30) {
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value,
      });
    } else if (tag.value.length > 6) {
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleOnClick = async () => {
    await dispatch(login(loginData.email, loginData.password));
  };

  return (
    <div className="login">
      <div className="container">
        <img src="/assets/images/coal.png" alt="coal" />
        <form className="form">
          <div className="form-upper">
            <label htmlFor="email">correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              minLength="6"
              onBlur={(e) => handleOnblur(e)}
            />
            <label htmlFor="password">contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              minLength="6"
              maxLength="20"
              onBlur={(e) => handleOnblur(e)}
            />
          </div>
          {loginResponse?.error ? <p>{loginResponse.message}</p> : null }
          <div className="button">
            <button type="button" onClick={handleOnClick}>iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
