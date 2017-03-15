import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

// import Profiles from './Profiles';

import './Support.css';

// Mapbox
const accessToken = "pk.eyJ1IjoiamFtZXNkb3ZleSIsImEiOiJjaXppdHkzNnkwMDQxMzJxcHU2ZDlqc2swIn0.Ure8r4g5Ka4ox2xNFYf5rQ";
const mapStyle = "mapbox://styles/jamesdovey/cj0aygmon003a2sqpyhqc042m";
const mapContainerStyle = {
  height: '100vh',
  width: '100vw'
};

class Support extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
  }

  onExpand(e) {
    e.preventDefault();
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    const classNames = ['support-map'];
    const buttonClassnames = ['expand-button'];
    const buttonLabel = this.state.isExpanded ? 'Close' : 'Expand';

    if (this.state.isExpanded) {
      classNames.push('support-map-full');
      buttonClassnames.push('collapse-button');
    }

    return (
      <article>
        <div className={classNames.join(' ')}>
          <ReactMapboxGl
            style={mapStyle} // eslint-disable-line react/style-prop-object
            accessToken={accessToken}
            containerStyle={mapContainerStyle}>
          </ReactMapboxGl>
        </div>

        <div className="row center-xs mt-60">
          <div className="col-xs-12">
            <a href="#"
              className={buttonClassnames.join(' ')}
              onClick={this.onExpand.bind(this)}
            >
              {buttonLabel}
            </a>
          </div>
        </div>
        {/* <Profiles /> */}
      </article>
    )
  }
}

export default Support;
