import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';

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
    </Switch>
  </Router>
);

export default Navigation;
