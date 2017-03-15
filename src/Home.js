import React from 'react';

import {TweenMax, TimelineMax} from 'gsap';

class Home extends React.Component {

  componentDidMount() {
    // animate stuff here
    // this.title DOM
    TweenMax.from(this.title, 1, { alpha: 0 });
  }

  render() {
    return (
      <div ref={div => this.title = div}>
        Home
      </div>
    )
  }
}

export default Home;
