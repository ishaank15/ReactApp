import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Meteor } from 'meteor/meteor'
import 'antd/dist/antd.css'
import './login.css'

import { message } from 'antd';
import React from 'react';
import TextField from './TextField'
import PasswordField from './PasswordField'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      error: '',
	  isAuthenticated: Meteor.userId() !== null ,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.state.isAuthenticated) {
        this.props.history.push('/');
    }
  }       

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
				console.log('Received values of form: ', values);
				const email = values.userName;
				const password  = values.password;
				
				try{
					Meteor.loginWithPassword(email, password, (err) => {
						if(err){
							this.setState({
								error: err.reason
                            });
							message.error(this.state.error)
							throw new Meteor.Error();
						} else {
							message.success('Successfully Logged In')
							this.props.history.push('/');
						}
					});
				}
				catch(err) {
					console.log('................', err)
				}
		
      }
    });
  }
  render() {
		const { getFieldDecorator } = this.props.form;
    return (
			<div className="login-page">
			<h1 align="center">LOGIN</h1>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<TextField TextFieldId='userName' getFieldDecorator={getFieldDecorator} placeholderMessage='Please input your email/username!'/>
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
			</div>
    );
  }
}

export default WrappedLoginForm = Form.create()(NormalLoginForm);
