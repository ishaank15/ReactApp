
import { Form, Icon, Input, Button } from 'antd';
import React from 'react';
const FormItem = Form.Item;


export default class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'getFieldDecorator': this.props.getFieldDecorator,
            'textFieldId': this.props.TextFieldId,
            'placeholderMessage' :  this.props.placeholderMessage
        }
    }
    render() {
        const { textFieldId, getFieldDecorator, placeholderMessage}  = this.state;
        return ( 
        <FormItem label="E-mail">
            {getFieldDecorator(`${textFieldId}`, { rules: [{ required: true, message: placeholderMessage ,
            initialValue: ''
            }]})(
            <Input prefix={<Icon type="user" />} placeholder="Username"/>
            )}
        </FormItem>)
       
    }
}
