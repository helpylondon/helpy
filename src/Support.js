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
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: '#fb3958',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: 0.75
  },
  popup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100px',
    height: '100px',
    backgroundColor: '#fff'
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  name: {
    marginTop: 5
  }
};

const data = {
  markers: [
    {
      name: 'John Doe',
      avatar: '/img/henrique.jpg',
      coordinates: [-0.12915363615130104,51.51260007442397]
    },
    {
      name: 'James Kelly',
      avatar: '/img/james.jpg',
      coordinates: [-0.11084467200137738,51.51653575792807]
    }
  ]
}

class Support extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      selected: null,
    };
  }

  onExpand(e) {
    e.preventDefault();
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  onMarkerOver(item, e) {
    this.setState({ selected: item });
  }

  onMarkerOut(e) {
    this.setState({ selected: null });
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
            containerStyle={mapContainerStyle}
          >

            {data.markers.map((item, key) => {
                item.key = key;
                return (
                  <Marker
                    key={key}
                    style={styles.marker}
                    coordinates={item.coordinates}
                    onMouseEnter={this.onMarkerOver.bind(this, item)}
                    onMouseLeave={this.onMarkerOut.bind(this)}
                  >
                  </Marker>
                );
            })}

            {this.state.selected &&
              <Popup
                key={this.state.selected.key}
                offset={[0, -80]}
                coordinates={this.state.selected.coordinates}
              >
                <div style={{
                  ...styles.popup,
                  display: this.state.selected ? 'flex' : 'none'
                }}>
                  <div style={styles.avatar}>
                    <img width="100%" src={this.state.selected.avatar} alt={this.state.selected.name} />
                  </div>
                  <h4 style={styles.name}>{this.state.selected.name}</h4>
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
