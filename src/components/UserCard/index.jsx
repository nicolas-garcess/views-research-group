import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

const UserCard = ({ user, rol }) => {
  const history = useHistory();

  const handlePressUser = () => {
    history.push(`${rol}/${user.id}`);
  };

  return (
    <div className="user" onClick={() => handlePressUser()} role="button" tabIndex={0} onKeyPress={() => handlePressUser()}>
      <p className="user__label">
        Nombre:
        {' '}
        <span>{user.nombre}</span>
      </p>
      <p className="user__label">
        Corre Electrónico:
        {' '}
        <span>{user.email}</span>
      </p>
      <p className="user__label">
        Usuario:
        {' '}
        <span>{user.usuario}</span>
      </p>
    </div>
  );
};

export default UserCard;
