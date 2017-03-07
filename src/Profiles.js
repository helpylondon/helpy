import React from 'react';
import Swiper from 'swiper';

import './Profiles.css';

class Profiles extends React.Component {
  componentDidMount() {
    new Swiper('.profiles');
  }
  
  render() {
    return (
      <div className="profiles">
        <div className="swiper-wrapper profiles">
          <div className="profile v-align lee"><h3>Lee</h3></div>
          <div className="profile v-align james"><h3>James</h3></div>
          <div className="profile v-align henrique"><h3>Henrique</h3></div>
          <div className="profile v-align casey"><h3>Casey</h3></div>
        </div>
      </div>
    )
  }
}

export default Profiles;
