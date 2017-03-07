import React from 'react';
import Swiper from 'swiper';

import './Profiles.css';

class Profiles extends React.Component {
  componentDidMount() {
    new Swiper('.profiles', {
      slidesPerView: 4,

      // Responsive breakpoints
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  }

  render() {
    return (
      <div className="profiles">
        <div className="swiper-wrapper profiles">
          <div className="swiper-slide">
            <div className="profile v-align lee"><h3>Lee</h3></div>
          </div>
          <div className="swiper-slide">
            <div className="profile v-align james"><h3>James</h3></div>
          </div>
          <div className="swiper-slide">
            <div className="profile v-align henrique"><h3>Henrique</h3></div>
          </div>
          <div className="swiper-slide">
            <div className="profile v-align casey"><h3>Casey</h3></div>
          </div>
          <div className="swiper-slide">
            <div className="profile v-align james"><h3>James</h3></div>
          </div>
          <div className="swiper-slide">
            <div className="profile v-align lee"><h3>Lee</h3></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profiles;
