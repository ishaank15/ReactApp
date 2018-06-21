
import { Form, Icon, Input, Button } from 'antd';
import React from 'react';
const FormItem = Form.Item;


export default class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'username': '',
            'getFieldDecorator': this.props.getFieldDecorator,
            'textFieldId': this.props.TextFieldId,
            'placeholderMessage' :  this.props.placeholderMessage
        }
    }
    render() {
        const { textFieldId, getFieldDecorator, placeholderMessage, username}  = this.state;
        return ( 
        <FormItem label="Email/Username">
            {getFieldDecorator(`${textFieldId}`, { rules: [{ required: true, message: placeholderMessage
            }]})(
            <Input prefix={<Icon type="user" />} placeholder="Username"  />
            )}
        </FormItem>)
    }
}
