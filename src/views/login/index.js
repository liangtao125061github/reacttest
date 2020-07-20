import React, { Component } from 'react';
import { connect } from 'react-redux';

class loginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: 'login'
    }
}

  render() {
    return (
      <div>
        { this.state.views }
      </div>
    );
  }
}

const login = connect()(loginContainer);
export {login as default};