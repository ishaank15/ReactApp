import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import TextField from './TextField'
import PasswordField from './PasswordField'
const FormItem = Form.Item;
import 'antd/dist/antd.css'

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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
						Or <a href="/register">register now!</a>
					</FormItem>
      </Form>
    );
  }
}

export default WrappedLoginForm = Form.create()(NormalLoginForm);
