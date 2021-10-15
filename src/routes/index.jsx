import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import User from '../components/User';
import PrivateRoute from './PrivateRoute';

const Navigation = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <PrivateRoute exact path="/user/:id" component={User} />
    </Switch>
  </Router>
);

export default Navigation;
