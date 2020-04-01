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

  componentDidMount() {
    this.timer = setInterval(this.props.fetchMessages, 9000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="message-list">
        <h3>Channel #general</h3>
        <div className="room">
          <div className="room-content" ref={(list)=>{this.list = list}}>
            { this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })}
          </div>
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
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
