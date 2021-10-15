import React from 'react';
import {
  Redirect, Route
} from 'react-router-dom';
import { getUser } from '../helpers/user';

const PublicRoute = ({ component: Component, ...rest }) => {
  const user = getUser();
  return (
    <Route {...rest}>
      {user === null ? <Component /> : <Redirect to={`/user/${user.id}`} /> }
    </Route>
  );
};

export default PublicRoute;
