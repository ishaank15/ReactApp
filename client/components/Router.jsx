import React from 'react';
// import { Layout } from 'antd';
import { BrowserRouter as ReactRouter,
    Route,
    NavLink,
    Switch
   } from 'react-router-dom';

import Home from './Home';
import WrappedLoginForm from './Login';
import ContactUs from './ContactUs';
import Product from './Product';
import Anonymous from './Anonymous';
import ForgotPassword from './ForgotPassword';
import Register from './Register';

export default class Router extends React.Component {
    render() {
        
        return (
            <ReactRouter>
                <Switch>
                    <Route exact path="/login" component={WrappedLoginForm} />
                    <Route exact path="/" component={Home} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/product" component={Product} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/register" component={Register} />
                    <Route path="/:id" component={Anonymous} />
                </Switch>
            </ReactRouter>
        )
    
    }
}
