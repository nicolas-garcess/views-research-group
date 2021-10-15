import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import User from '../components/User';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Navigation = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <PublicRoute exact path="/login" component={Login} />
      <PrivateRoute exact path="/register" component={Register} />
      <PrivateRoute exact path="/user/:id" component={User} />
    </Switch>
  </Router>
);

export default Navigation;
