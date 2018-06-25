import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

class SpecialAccess extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { criteria } = this.props;
		return (
			<div>
				{criteria ? ("Welcome to Admin Page") : (<Redirect to="/login" />)}
			</div>
		);
	}
}

SpecialAccess.propTypes = {
	criteria: PropTypes.boolean
};
export default SpecialAccess;