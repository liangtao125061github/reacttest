import React, { Component } from 'react';
import { connect } from 'react-redux';

class homeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: 'home'
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

const home = connect()(homeContainer);
export {home as default};