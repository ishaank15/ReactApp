import React, { Component } from 'react';
import { withHistory } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
import { message } from 'antd';

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount(){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
    else
      this.props.history.push('/');
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  logout(event){
    event.preventDefault();
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            message.success('Successfully Logged Out')
            this.props.history.push('/login');
        }
    });
  }

  render(){
    return (
      <div>
        <a href="#">Auth App</a>
        ------------------------------------------------------------------
        <a href="#" onClick={this.logout}>Logout</a>
        ------------------------------------------------------------------
        <MainContainer />
      </div>
    );
  }
}