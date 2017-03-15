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
            style="mapbox://styles/jamesdovey/cj0aygmon003a2sqpyhqc042m" // eslint-disable-line react/style-prop-object
            accessToken="pk.eyJ1IjoiamFtZXNkb3ZleSIsImEiOiJjaXppdHkzNnkwMDQxMzJxcHU2ZDlqc2swIn0.Ure8r4g5Ka4ox2xNFYf5rQ"
            containerStyle={{
              height: '100%',
              width: '100%'
            }}>
          </ReactMapboxGl>
        </div>

        <div className="row center-xs mt-60">
          <div className="col-xs-12">
            <a href="#" id="expand">Expand</a>
          </div>
        </div>
        {/* <Profiles /> */}
      </article>
    )
  }
}

export default Support;
