import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" viewBox="0 0 32 40">
        <g>
          <path fill={this.props.fill} d="M20.9,26.2C20.9,26.2,20.9,26.2,20.9,26.2c-0.3,0.4-0.2,0.9,0.2,1.1c0.5,0.3,0.7,0.6,0.7,0.8c0,0.8-2.3,1.9-5.7,1.9   c-3.4,0-5.7-1.1-5.7-1.9c0-0.2,0.2-0.5,0.7-0.8c0.4-0.2,0.4-0.7,0.2-1.1c0,0,0,0,0,0c-0.2-0.3-0.7-0.4-1-0.2   c-0.9,0.6-1.4,1.3-1.4,2.1c0,2.2,3.6,3.4,7.3,3.4c3.6,0,7.2-1.2,7.2-3.4c0-0.8-0.5-1.5-1.4-2.1C21.5,25.8,21.1,25.9,20.9,26.2z"/>
          <path fill={this.props.fill} d="M16,0.5c-6,0-10.9,4.9-10.9,10.9c0,3.9,4.3,10.1,7.9,14.7c0.4,0.5,0.8,1,1.2,1.4c0.5,0.5,1.1,0.9,1.8,0.9   c0.7,0,1.4-0.3,1.8-0.9c0.3-0.4,0.7-0.9,1.2-1.4c3.6-4.5,7.9-10.8,7.9-14.7C26.9,5.4,22,0.5,16,0.5z M16,14.7   c-2.3,0-4.2-1.9-4.2-4.2s1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2S18.3,14.7,16,14.7z"/>
        </g>
      </svg>
    )
  }
}

export default Logo;
