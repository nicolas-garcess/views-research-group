import React from 'react';
import './index.css';

const UserCard = ({ user }) => (
  <div className="user">
    <p>
      Nombre:
      {' '}
      {user.name}
    </p>
    <p>
      E-mail:
      {' '}
      {user.email}
    </p>
    <p>
      Dirección:
      {' '}
      {user.address.street}
      {' '}
      {user.address.suite}
    </p>
  </div>
);

export default UserCard;
