import React from 'react';
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';

// import Profiles from './Profiles';

import './Support.css';

// Mapbox
const accessToken = "pk.eyJ1IjoiamFtZXNkb3ZleSIsImEiOiJjaXppdHkzNnkwMDQxMzJxcHU2ZDlqc2swIn0.Ure8r4g5Ka4ox2xNFYf5rQ";
const mapStyle = "mapbox://styles/jamesdovey/cj0aygmon003a2sqpyhqc042m";
const mapContainerStyle = {
  height: '100vh',
  width: '100vw'
};

const styles = {
  marker: {
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: '#fb3958',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  popup: {
    width: '120px',
    height: '120px',
    backgroundColor: '#fff'
  }
}

class Support extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isExpanded: false, showPopup: false };
  }

  onExpand(e) {
    e.preventDefault();
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  onMarkerOver(e) {
    this.setState({showPopup: !this.state.showPopup});
  }

  onMarkerOut(e) {
    this.setState({showPopup: false});
  }

  render() {
    const classNames = ['support-map'];
    const buttonLabel = this.state.isExpanded ? 'Close' : 'Expand';

    if (this.state.isExpanded) {
      classNames.push('support-map-full');
    }

    return (
      <article>
        <div className={classNames.join(' ')}>
          <ReactMapboxGl
            style={mapStyle} // eslint-disable-line react/style-prop-object
            accessToken={accessToken}
            containerStyle={mapContainerStyle}>
            <div
              onMouseOver={this.onMarkerOver.bind(this)}
              onMouseOut={this.onMarkerOut.bind(this)}
            >
              <Marker
                style={styles.marker}
                coordinates={[-0.12915363615130104,51.51260007442397]}
                >
              </Marker>
            </div>

            {this.state.showPopup &&
              <Popup
                key="k"
                offset={[0, -100]}
                coordinates={[-0.12915363615130104,51.51260007442397]}
              >
                <div style={{
                  ...styles.popup,
                  display: this.state.showPopup ? 'block' : 'none'
                }}>
                  popup
                </div>
              </Popup>
            }
          </ReactMapboxGl>
        </div>

        <div className="row center-xs mt-60">
          <a href="#"
            className="expand-button"
            onClick={this.onExpand.bind(this)}
          >
            {buttonLabel}
          </a>
        </div>
        {/* <Profiles /> */}
      </article>
    )
  }
}

export default Support;
