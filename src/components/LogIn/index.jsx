import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser } from '../../helpers/user';
import { login } from '../../store/auth';
import CustomInput from '../CustomInput';
import CustomLabel from '../CustomLabel';
import './index.css';

const initialState = {
  email: '',
  password: '',
};

const LogIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loginResponse } = useSelector((state) => (state.auth));
  const [loginData, setLoginData] = useState(initialState);

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

    const user = getUser();
    history.push(`/usuario/${user.id}`);
  };

  return (
    <div className="login">
      <div className="login-container">
        <img src="/assets/images/coal.png" alt="coal" />
        <form className="form">
          <div className="form-upper">
            <div>
              <CustomLabel className="label-login" htmlFor="email" value="CORREO ELECTRÓNICO" />
              <CustomInput type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" className="input-login" minLength="6" onBlur={handleOnblur} />
            </div>
            <div>
              <CustomLabel className="label-login" htmlFor="password" value="CONTRASEÑA" />
              <CustomInput
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                className="input-login"
                onBlur={handleOnblur}
                minLength="6"
                maxLength="20"
              />
            </div>
          </div>
          {loginResponse?.error ? <p>{loginResponse.message}</p> : null }
          <div className="form-down">
            <button className="login-button" type="button" onClick={handleOnClick}>iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
