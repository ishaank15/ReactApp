import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// containers
import MainContainer from '../../ui/containers/MainContainer.jsx'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

// pages
import SignupPage from '../../ui/pages/Signup/SignupPage.jsx'
import LoginPage from '../../ui/pages/Login/LoginPage'

export const renderRoutes = () => (
  <Router>
    <div>
    <Switch>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      {/* <PublicRoute/> */}
      <PrivateRoute/>
    </Switch>

    </div>
  </Router>
);
