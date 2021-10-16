import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
// import Home from '../components/Home';
import Login from '../components/Login';
import Projects from '../components/Projects';
import SingUp from '../components/SingUp';
import User from '../components/User';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const adminRoles = ['researcher'];
const commonRoles = ['researcher', 'student'];

const Navigation = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <PublicRoute exact path="/login" component={Login} />
      <PrivateRoute exact path="/signup" component={SingUp} roles={adminRoles} />
      <PrivateRoute exact path="/user/:id" component={User} roles={commonRoles} />
    </Switch>
  </Router>
);

export default Navigation;
