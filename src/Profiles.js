import React from 'react';
import Swiper from 'swiper';

import './Profiles.css';

class Profiles extends React.Component {
  componentDidMount() {
    new Swiper('.profiles', {
      slidesPerView: 4,
      keyboardControl: true,
      paginationClickable: true,
      grabCursor: true,
      loop: false,
      nextButton: '.button-next',
      prevButton: '.button-prev',

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
      <div className="profiles-wrapper">
        <div className="profiles">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="profile v-align lee"><h2>Lee</h2></div>
            </div>
            <div className="swiper-slide">
              <div className="profile v-align james"><h2>James</h2></div>
            </div>
            <div className="swiper-slide">
              <div className="profile v-align henrique"><h2>Henrique</h2></div>
            </div>
            <div className="swiper-slide">
              <div className="profile v-align casey"><h2>Casey</h2></div>
            </div>
            <div className="swiper-slide">
              <div className="profile v-align james"><h2>James</h2></div>
            </div>
            <div className="swiper-slide">
              <div className="profile v-align lee"><h2>Lee</h2></div>
            </div>
          </div>
        </div>
        <div className="button-next"></div>
        <div className="button-prev"></div>
      </div>
    )
  }
}

export default Profiles;
