import React, { Component } from 'react';

class Channel extends Component {
  // set default messages
  render() {
    return (
      <div className="channel">
        { this.props.channel }
      </div>
    );
  }
}

export default Channel;
