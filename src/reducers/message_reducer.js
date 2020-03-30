export default function(state = null, action) {
  console.log('action', action);
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload.messages;
    case 'CREATE_MESSAGE': {
      const newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    }
    default:
      return state;
  }
}
