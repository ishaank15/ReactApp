import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import SpecialAccess from '../../ui/pages/SpecialAccess/SpecialAccess'

class PrivateRoute extends Component {
    
    render() {
        let userId = Meteor.userId();
        const criteria = (userId === '65QbM7k2tuzpAj7M2');
        return (
            criteria ? <Route path="/admin" component = {SpecialAccess}/> : <Redirect to="/login" />
        )
    }
}

export default PrivateRoute