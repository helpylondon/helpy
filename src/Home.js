import React from 'react';
import { Link } from 'react-router';

import {TimelineMax, Power2} from 'gsap';

import './Home.css';

class Home extends React.Component {

  componentDidMount() {
    const tl = new TimelineMax();
    tl
      .from(this.quote, 1, {x: 300, alpha: 0, ease: Power2.easeInOut})
			.from(this.img, 1, {y: 500, alpha: 0, ease: Power2.easeInOut}, '-=0.7')
      .from(this.btn, 1, {alpha: 0});
  }

  render() {
    return (
      <div>
        <div className="row center-xs">
          <div className="col-xs-12 col-lg-6 mb-30">
            <p className="quote" ref={div => this.quote = div}>
              Lee has been on the streets now for 2 years, and wants to become a lifeguard.
            </p>
            <div ref={div => this.btn = div}>
              <Link to="/support" className="button hvr-grow">Help Now</Link>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6">
            <img src="/img/lee.jpg" width="100%" className="home-img" ref={div => this.image = div} alt="Lee" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
