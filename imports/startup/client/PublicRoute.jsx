import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import SignupPage from "../../ui/pages/Signup/SignupPage.jsx";
import LoginPage from "../../ui/pages/Login/LoginPage";

class PublicRoute extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Switch>
				<Route path="/login" component={LoginPage}/>
				<Route path="/signup" component={SignupPage}/>
				<Redirect to="/"/>
			</Switch>
		);       
	}
}

export default PublicRoute;