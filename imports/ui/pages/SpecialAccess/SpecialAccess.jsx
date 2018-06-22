import React, { Component } from 'react';

class SpecialAccess extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { criteria } = this.props;
		
		return (
			criteria ? <div>"Welcome to Admin Page"</div> : <Redirect to="/login" />
		)
	}
}

export default SpecialAccess