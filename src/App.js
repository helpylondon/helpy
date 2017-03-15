import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from './Logo';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <header className="header">
          <div className="logo"><Logo fill="#ff3ccc" /></div>
          <Link to="/about">About</Link>
        </header>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
