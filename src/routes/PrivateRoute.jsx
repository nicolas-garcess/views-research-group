import React from 'react';
import {
  Redirect, Route
} from 'react-router-dom';
import { getUser } from '../helpers/user';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = getUser();
  return (
    <Route {...rest}>
      {user ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
