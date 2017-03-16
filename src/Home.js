import React from 'react';
import { Link } from 'react-router';

import {TweenMax, TimelineMax, Power2} from 'gsap';

import './Home.css';

class Home extends React.Component {

  componentDidMount() {
    // animate stuff here
    // this.title DOM
    var tl = new TimelineMax(),
				quote = this.quote,
				img = this.image,
        btn = this.btn;

        tl
    				.from(quote, 1, { x:300, alpha: 0, ease: Power2.easeInOut} )
    				.from(img, 1, { y:500, alpha: 0, ease: Power2.easeInOut}, "-=0.7" )
            .from(btn, 1, { alpha:0 })

            // Animate Out
            // .to(quote, 1, { x:-300, alpha: 0, ease: Power2.easeInOut}, "+=4" )
    				// .to(img, 1, { y:500, alpha: 0, ease: Power2.easeInOut}, "-=0.7" )
            // .to(btn, 1, { alpha:0, onComplete: newContent }, "-=0.7")

            // function newContent() {
        		// 		img.attr("src", img)
        		// 		quote.html("These stories will change by being pulled from the database")
        		// 		TweenMax.from(img, 1, { y:500, alpha: 0, ease: Power2.easeInOut})
            //
        		// 		tl.pause(0, true);
        		// 		tl.play();
        		// };



  }

  render() {
    return (
      <div className="home">
        <div className="row center-xs">
          <div className="col-xs-12 col-lg-6 mb-30">
            <p className="quote" ref={div => this.quote = div}>
              Lee has been on the streets now for 2 years, and wants to become a lifeguard.
            </p>
            {/* <p className="quote" ref={div => this.quote = div}>
              Ivo travelled to London from Czech Republic. He had his passport and all belongings stolen
            </p> */}
            <div ref={div => this.btn = div}>
              <Link to="/profile" className="button hvr-grow">Help Now</Link>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6">
            <img src="/img/lee.jpg" width="100%" className="home-img" ref={div => this.image = div} />
            {/* <img src="/img/Ivo.jpg" width="100%" className="home-img" ref={div => this.image = div} /> */}
          </div>
        </div>
      </div>

    )
  }
}

export default Home;
