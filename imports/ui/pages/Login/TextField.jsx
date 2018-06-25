
import { Form, Icon, Input } from "antd";
import React from "react";
const FormItem = Form.Item;
import PropTypes from "prop-types";


export default class TextField extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { textFieldId, getFieldDecorator, placeholderMessage}  = this.props;
		return ( 
			<FormItem label="Email/Username">
				{getFieldDecorator(`${textFieldId}`, { rules: [{ required: true, message: placeholderMessage
				}]})(
					<Input prefix={<Icon type="user" />} placeholder="Username"  />
				)}
			</FormItem>);
	}
}

TextField.propTypes = {
	getFieldDecorator: PropTypes.any,
	textFieldId: PropTypes.string,
	placeholderMessage : PropTypes.string,
};
