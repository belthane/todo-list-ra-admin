import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

export default [
  <Route exact path='/' component={Home} noLayout />,
  <Route exact path='/admin' component={Dashboard} />,
];
