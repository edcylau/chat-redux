// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// reducers
import channelReducer from './reducers/channel_reducer';
import messageReducer from './reducers/message_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import usernameReducer from './reducers/username_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
// initial state
const initialState = {
  // TODO:
  messages: [],
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  username: prompt("What's your name?") || `annoymous${Math.floor(Math.random() * 100)}`
};

// reducers
const reducers = combineReducers({
  channels: channelReducer,
  messages: messageReducer,
  selectedChannel: selectedChannelReducer,
  username: usernameReducer
});


const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
