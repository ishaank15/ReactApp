import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx'
import MainContainer from '../../ui/containers/MainContainer.jsx'
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
      <Route exact={true} path="/" component={AppContainer}/>
      <PrivateRoute/>
      <Route render={() => <div>Page Not Found</div>}/>
    </Switch>

    </div>
  </Router>
);
