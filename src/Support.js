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

const center = [-0.10015363615130104,51.50210007442397];
const zoom = [12];

const styles = {
  marker: {
    width: 15,
    height: 15,
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
      name: 'Lee',
      avatar: '/img/Lee.jpg',
      coordinates: [-0.07322890555778372,51.524086199842515]
    },
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.028426423655190547,51.477971782704316]
    },
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.0259913877221436,51.475307406513565]
    },
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.0417259025766441,51.47587007251278]
    },
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.13402774914393945,51.49820673627539]
    },
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.14278969368271532,51.49646082608146]
    }, // new
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.13374222594075036,51.49665544149141]
    },
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.06971699636181938,51.472973380049694]
    },
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.056501514515190365,51.511659602794055]
    },
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.08354396866565139,51.512125160706404]
    },
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.11356385780473488,51.46326083359597]
    },
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.09676235183425774,51.50302198608628]
    },
    {
      name: 'Ivo',
      avatar: '/img/Ivo.jpg',
      coordinates: [-0.11355665706233253,51.50055033141243]
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
            center={center}
            zoom={zoom}
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
