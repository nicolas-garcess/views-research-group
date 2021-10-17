import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
// import Home from '../components/Home';
import LogIn from '../components/LogIn';
import Projects from '../components/Projects';
import ProjectInfo from '../components/ProjectInfo';
import Researchers from '../components/Researchers';
import Students from '../components/Students';
import SignUp from '../components/SignUp';
import User from '../components/User';
import UserInfo from '../components/UserInfo';
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
      <PublicRoute exact path="/login" component={LogIn} />
      <PrivateRoute exact path="/signup" component={SignUp} roles={adminRoles} />
      <PrivateRoute exact path="/usuario/:id" component={User} roles={commonRoles} />
      <PrivateRoute exact path="/proyectos" component={Projects} roles={adminRoles} />
      <PrivateRoute exact path="/proyecto/:id" component={ProjectInfo} roles={adminRoles} />
      <PrivateRoute exact path="/investigadores" component={Researchers} roles={adminRoles} />
      <PrivateRoute exact path="/estudiantes" component={Students} roles={adminRoles} />
      <PrivateRoute exact path="/:role/:id" component={UserInfo} roles={adminRoles} />
    </Switch>
  </Router>
);

export default Navigation;
