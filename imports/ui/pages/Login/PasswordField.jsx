
import { Form, Icon, Input } from "antd";
import React from "react";
const FormItem = Form.Item;
import PropTypes from "prop-types";

export default class PasswordField extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { getFieldDecorator, placeholderMessage, textFieldId}  = this.props;
		return ( 
			<FormItem label="Password" className='password'>
				{getFieldDecorator(`${textFieldId}`, {
					rules: [{ required: true, message: placeholderMessage}],
				})(
					<Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />
				)}
			</FormItem>
  
		);
       
	}
}

PasswordField.propTypes = {
	getFieldDecorator: PropTypes.any,
	textFieldId: PropTypes.string,
	placeholderMessage : PropTypes.string,
};
