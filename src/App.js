import React, { Component } from 'react';
import ReactMapboxGl from "react-mapbox-gl";

import './App.css';

class App extends Component {
  render() {
    return (
      <article>
        <header className="header">
          Logo
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
          <div className="profile"></div>
          <div className="profile"></div>
          <div className="profile"></div>
          <div className="profile"></div>
          <div className="profile"></div>
        </section>
      </article>
    );
  }
}

export default App;
