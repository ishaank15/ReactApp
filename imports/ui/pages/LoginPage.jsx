import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Meteor } from 'meteor/meteor'
import 'antd/dist/antd.css'

import React from 'react';
import TextField from '../layout/TextField'
import PasswordField from '../layout/PasswordField'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
				console.log('Received values of form: ', values);
				const email = values.userName;
				const password  = values.password;
				Meteor.loginWithPassword(email, password, (err) => {
					if(err){
						this.setState({
							error: err.reason
						});
					} else {
						this.props.history.push('/');
					}
				});
      }
    });
  }
  render() {
		const { getFieldDecorator } = this.props.form;
		console.log('------------------------------------------------------------')
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
				<TextField TextFieldId='userName' getFieldDecorator={getFieldDecorator} placeholderMessage='Please input your username!'/>
				<PasswordField TextFieldId='password' getFieldDecorator={getFieldDecorator} placeholderMessage='Please input your Password!'/>
				<br/>	
					<FormItem>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true,
						})(
							<Checkbox>Remember me</Checkbox>
						)}
						<br/>
						<a className="login-form-forgot" href="/forgot-password">Forgot password</a>
						<br/>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
						<br/>
						Or <a href="/signup">Register now!</a>
					</FormItem>
      </Form>
    );
  }
}

export default WrappedLoginForm = Form.create()(NormalLoginForm);
