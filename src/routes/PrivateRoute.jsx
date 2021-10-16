import React from 'react';
import {
  Redirect, Route
} from 'react-router-dom';
import { getUser } from '../helpers/user';

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const user = getUser();

      if (user === null) {
        // User is not logged
        return <Redirect to="/login" />;
      }

      if (roles && roles.indexOf(user.rol) === -1) {
        // User does not have the permission
        return <Redirect to={`/usuario/${user.id}`} />;
      }
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
