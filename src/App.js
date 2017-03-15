import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './Header';

class App extends Component {

  render() {
    return (
      <div>
        <Header  />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
