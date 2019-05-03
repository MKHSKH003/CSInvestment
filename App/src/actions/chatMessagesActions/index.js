export const LOAD_MESSAGES_REQUEST = 'LOAD_MESSAGES_REQUEST';
export const LOAD_MESSAGES_SUCCESS = 'LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES_FAILURE = 'LOAD_MESSAGES_FAILURE';

export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';

export const LOAD_ALL_MESSAGES_REQUEST = 'LOAD_ALL_MESSAGES_REQUEST';

export const loadAllMessagesRequest = () => {
    return{
      type: LOAD_ALL_MESSAGES_REQUEST,
   }
};

export const loadMessagesRequest = (id) => {
    return{
      type: LOAD_MESSAGES_REQUEST,
      id
   }
};

export const loadMessagesSuccess = (messages) => ({
      type: LOAD_MESSAGES_SUCCESS,
      messages
});

export const sendMessageRequest = (id, username,message) => {
    return{
      type: SEND_MESSAGE_REQUEST,
      id,
      username,
      message
   }
};

export const sendMessageSuccess = (messages) => ({
      type: SEND_MESSAGE_SUCCESS,
      messages
});