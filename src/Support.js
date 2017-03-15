import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import Profiles from './Profiles';

import './Support.css';

class Support extends React.Component {
  render() {
    return (
      <article>
        <div className="support-map">
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
    )
  }
}

export default Support;
