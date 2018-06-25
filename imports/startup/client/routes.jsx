import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// containers
// import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

// pages
import SignupPage from "../../ui/pages/Signup/SignupPage.jsx";
import LoginPage from "../../ui/pages/Login/LoginPage";

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
