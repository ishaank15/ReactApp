import React, { Component } from "react";
// import { Link } from "react-router-dom";

// /home/ishaank/project/react-meteor-app/imports/ui/components/Dashboard.jsx
// /home/ishaank/project/react-meteor-app/imports/ui/pages/Main/MainPage.jsx
import Dashboard from "../../components/Dashboard";
export default class MainPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: ""
		};
	}

	render(){
		// let currentUser = this.props.currentUser;
		// let userDataAvailable = (currentUser !== undefined);
		// let loggedIn = (currentUser && userDataAvailable);
		return (
			<div>
				<Dashboard/>
			</div>
		);
	}
}
