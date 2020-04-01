import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Channel from '../components/channel';


class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list">
        { this.props.channels.map((channel) => {
          return <Channel channel={channel} />;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectedChannel: selectedChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return { channels: state.channels };
}


export default connect(mapStateToProps)(ChannelList);
