import React from 'react';
import { useHistory } from 'react-router-dom';
import { removeUser } from '../../helpers/user';
import './index.css';

const LogOut = () => {
  const history = useHistory();

  const handleOnClick = () => {
    removeUser();
    history.push('/login');
  };

  return (
    <div className="logout-container">
      <button className="logout" type="button" onClick={handleOnClick}>Cerrar sesión</button>
    </div>
  );
};

export default LogOut;
