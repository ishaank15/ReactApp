import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard'
export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
  }

  render(){
    const users =  Meteor.users.find().fetch();
    console.log(users)
    // let currentUser = this.props.currentUser;
    // let userDataAvailable = (currentUser !== undefined);
    // let loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
        <Dashboard/>
        {/* <div className="container">
          <h1 className="text-center">
            { 'Welcome, Here\'s is the list of users enrolled till date:' }
            <div>
                <table border="1" width="50%">
                    <tbody>
                    {
                        users.map(item => (
                            <tr key={item._id} border="1">
                              <td>
                                { item.emails ? item.emails[0].address: item._id }
                              </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            
          </h1>
        </div> */}

        {/* <UserList/> */}
      </div>
    );
  }
}
