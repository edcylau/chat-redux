import React, { Component } from 'react';

class Message extends Component {
  // set default messages
  render() {
    return (
      <div className="message">
        <div className="title">
          <div className="name">{this.props.message.author}</div>
          <div className="timestamp">{this.props.message.created_at}</div>
        </div>
        <div className="content">
          {this.props.message.content}
        </div>
      </div>
    );
  }
}

export default Message;
