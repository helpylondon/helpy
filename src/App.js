import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import Logo from './Logo';
import Profiles from './Profiles';

import './App.css';

class App extends Component {

  render() {
    return (
      <article>
        <header className="header">
          <div className="logo"><Logo fill="#ff3ccc" /></div>
        </header>
        <div className="map">
        <a href="#"><img src="/img/expand.svg" width="50px" className="expand" /></a>
          <ReactMapboxGl
            style="mapbox://styles/jamesdovey/ciziu0nhl003r2skfn5vy1u4k" // eslint-disable-line react/style-prop-object
            accessToken="pk.eyJ1IjoiamFtZXNkb3ZleSIsImEiOiJjaXppdHkzNnkwMDQxMzJxcHU2ZDlqc2swIn0.Ure8r4g5Ka4ox2xNFYf5rQ"
            containerStyle={{
              height: '100vh',
              width: '100vw'
            }}>
          </ReactMapboxGl>
        </div>
        <Profiles />
      </article>
    );
  }
}

export default App;
