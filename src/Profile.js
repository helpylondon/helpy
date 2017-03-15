import React from 'react';
import { Link } from 'react-router';

import {TweenMax, TimelineMax, Power2, Circ} from 'gsap';

import './Profile.css';


class Profile extends React.Component {

  componentDidMount() {
    // animate stuff here
    // this.title DOM
    var tl = new TimelineMax(),
				name = this.name,
				img = this.image,
        details = this.details,
        local = this.location,
        text = this.text;

        tl
    				.from(img, 1, { scale:0, alpha: 0, ease: Circ.easeInOut} )
    				.from(name, 1, { y:50, alpha: 0, ease: Power2.easeInOut}, "-=0.7" )
            .from(local, 1, { y:50, alpha: 0, ease: Power2.easeInOut}, "-=0.7" )
            .from(details, 1, { y:50, alpha: 0, ease: Power2.easeInOut}, "-=0.7" )
            .from(text, 1, { alpha: 0, ease: Power2.easeInOut}, "-=0.5" )


  }

  render() {
    return (
      <article>
        <div className="row center-xs">
          <div className="col-xs-12 col-lg-6">
          	<div>
              <img src="/img/lee.jpg" className="profile-img" ref={div => this.image = div} />
              <h1 ref={div => this.name = div}>Lee</h1>
              <div className="v-align" ref={div => this.location = div}>
                <img src="/img/location.svg" width="40px" />
                <span>Brick Lane - Shoreditch</span>
              </div>
          	</div>
          </div>
        </div>

        <div className="row center-xs mtb-60" ref={div => this.details = div}>
          <div className="col-xs-12 col-md-4 col-lg-3">
            <div>
              <span>Time Homeless</span>
              <h2>2 Years</h2>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-3">
            <div>
              <span>Age</span>
              <h2>47</h2>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-3">
            <div>
              <span>Dream Job</span>
              <h2>Lifeguard</h2>
            </div>
          </div>
        </div>

        <div className="row center-xs">
          <div className="col-xs-12 col-lg-6">
            <p ref={div => this.text = div}>
              Lee is someone who hasn’t had the best of luck with the system, yet still battles the urge to turn to drink or drugs. He gave up drinking 15 years ago. He choses not to turn to family and friends because he doesn’t want to burden them, I think it’s time his luck turned don’t you.
            </p>
            {/* <Link to="/help" className="button mt-30">Help</Link> */}
          </div>
        </div>

        <div className="row center-xs mt-60">
          <div className="col-xs-12 col-lg-6">
            <img src="/img/support.svg" width="100px" />
            <h1>Support Zone</h1>
          </div>
        </div>

        <div className="row center-xs mt-60">
          <div className="col-xs-12 col-lg-4">
            <div className="item v-align">
              <h1 className="red">Sleeping Bag</h1>
              <span>Add</span>
            </div>
          </div>

          <div className="col-xs-12 col-lg-4">
            <div className="item v-align">
              <h1 className="red">Haircut</h1>
              <span>Add</span>
            </div>
          </div>
        </div>

        <div className="row center-xs mt-60">
          <div className="col-xs-12 col-lg-4">
            <div className="item v-align">
              <h1 className="red">Water</h1>
              <span>Add</span>
            </div>
          </div>

          <div className="col-xs-12 col-lg-4">
            <div className="item v-align">
              <h1 className="red">Warm Drink</h1>
              <span>Add</span>
            </div>
          </div>
        </div>

        <div className="row center-xs mt-60">
          <div className="col-xs-12 col-lg-4">
            <div className="item v-align">
              <h1 className="red">Cooked Meal</h1>
              <span>Add</span>
            </div>
          </div>

          <div className="col-xs-12 col-lg-4">
            <div className="item v-align">
              <h1 className="red">Clothes</h1>
              <span>Add</span>
            </div>
          </div>
        </div>

        <div className="row center-xs mt-60">
          <div className="col-xs-12 col-lg-4">
            <div className="item v-align">
              <h1 className="red">Oyster Top-up</h1>
              <span>Add</span>
            </div>
          </div>

          <div className="col-xs-12 col-lg-4">
            <div className="item v-align">
              <h1 className="red">Warm Meal</h1>
              <span>Add</span>
            </div>
          </div>
        </div>

        <div className="row center-xs mtb-60">
          <div className="col-xs-12">
            <a href="" className="button hvr-grow">Donate Now</a>
          </div>
        </div>


      </article>
    )
  }
}

export default Profile;
