// TODO: add and export your own actions
export function fetchMessages(channel){
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch("https://wagon-chat.herokuapp.com/general/messages")
    .then(response => response.json());

  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  // TODO
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { 'author': author, 'content': content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'CREATE_MESSAGE',
    payload: promise
  };
}
