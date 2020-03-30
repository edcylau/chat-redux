import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages('general');
  }

  render() {
    return (
      <div className="message-list">
        <h3>Channel #general</h3>
        <div className="room">
          { this.props.messages.map((message) => {
            return <Message key={message.created_at} message={message} />;
          })}
        </div>
        <div className="form">
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return { messages: state.messages };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
