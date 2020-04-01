import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';


const App = () => {
  return (
    <div className="app">
      <div className="lw-col">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" />
      </div>
        <ChannelList />
        <MessageList />
    </div>
  );
};

export default App;
