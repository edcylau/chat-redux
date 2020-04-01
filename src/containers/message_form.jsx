import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage('general', this.props.username, this.state.value);
    this.setState({ value: "" });
  }

  // set default messages
  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { username: state.username };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
