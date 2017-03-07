import React, { Component } from 'react';
import ReactMapboxGl from "react-mapbox-gl";

import Logo from './Logo';

import './App.css';

class App extends Component {
  render() {
    return (
      <article>
        <header className="header">
          <div className="logo"><Logo fill="#ff3ccc" /></div>
        </header>
        <div className="map">
          <ReactMapboxGl
            style="mapbox://styles/jamesdovey/ciziu0nhl003r2skfn5vy1u4k" // eslint-disable-line react/style-prop-object
            accessToken="pk.eyJ1IjoiamFtZXNkb3ZleSIsImEiOiJjaXppdHkzNnkwMDQxMzJxcHU2ZDlqc2swIn0.Ure8r4g5Ka4ox2xNFYf5rQ"
            containerStyle={{
              height: '100vh',
              width: '100vw'
            }}>
          </ReactMapboxGl>
        </div>
        <section className="profiles">
          <div className="profile v-align lee"><h3>Lee</h3></div>
          <div className="profile v-align james"><h3>James</h3></div>
          <div className="profile v-align henrique"><h3>Henrique</h3></div>
          <div className="profile v-align casey"><h3>Casey</h3></div>
        </section>
      </article>
    );
  }
}

export default App;
