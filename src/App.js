import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import RouteLink from './components/layout/Link'

import Login from './components/session/login';
import Register from './components/session/register';

const hello = () => (
  <Router>
    <Switch>
      <Route exact component={Register} path='/register'/>
      <Route exact component={Login} path='/login'/>
      <Route component={RouteLink} path='/' />
      {/* <PrivateRoute component={MainLayout} path="/"/> */}
    </Switch>
  </Router>
)

export default hello