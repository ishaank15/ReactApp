
import { Form, Icon, Input, Button } from 'antd';
import React from 'react';
const FormItem = Form.Item;


export default class PasswordField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'getFieldDecorator': this.props.getFieldDecorator,
            'textFieldId': this.props.textFieldId,
            'placeholderMessage' :  this.props.placeholderMessage
        }
    }
    render() {
        const { textFieldId, getFieldDecorator, placeholderMessage}  = this.state;
        return ( 
        <FormItem label="Password" className='password'>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: placeholderMessage}],
            })(
                <Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />
            )}
        </FormItem>
  
        )
       
    }
}
