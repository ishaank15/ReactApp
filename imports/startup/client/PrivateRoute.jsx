import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import SpecialAccess from "../../ui/pages/SpecialAccess/SpecialAccess";
import AppContainer from "../../ui/containers/AppContainer.jsx";

class PrivateRoute extends Component {
	constructor(props) {
		super(props);
	}
    
	render() {
		let userId = Meteor.userId();
		const criteria = (userId === "65QbM7k2tuzpAj7M2");
		return (
			<Switch>
				<Route exact={true} path="/" component={AppContainer}/>
				<Route path="/admin" criteria={criteria} component = {SpecialAccess}/>
				<Redirect to="/login" />
			</Switch>
		);
	}
}

export default PrivateRoute;