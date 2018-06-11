import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, link } from 'react-router-dom'

class Anonymous extends Component {
  render() {
      const { match : { params: {id}}} = this.props;
      console.log(this.props);
    return (
      <h1> Anonymous Link with id: {id}</h1>
    );
  }
}

export default Anonymous;