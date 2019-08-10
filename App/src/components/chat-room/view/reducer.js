import {
   LOAD_MESSAGES_REQUEST,
   LOAD_MESSAGES_SUCCESS,
   LOAD_MESSAGES_FAILURE,
   SEND_MESSAGE_REQUEST,
   LOAD_ALL_MESSAGES_REQUEST
} from './actions'

export const initialState = {
   id: '',
   messages: [],
   status: {
      loading: false,
   }
};

export default (state = initialState, action) => {
   switch (action.type) {
      case LOAD_MESSAGES_REQUEST:
         return {
            ...state,
            id: action.id,
            status: {
               loading: true
            }
         };
      case LOAD_MESSAGES_SUCCESS:
         return {
            ...state,
            messages: action.messages,
            status: {
               loading: false
            }
         };
      case LOAD_MESSAGES_FAILURE:
         return {
            ...state,
            status: {
               loading: false
            }
         };
      case LOAD_ALL_MESSAGES_REQUEST:
         return {
            ...state,
            status: {
               loading: true
            }
         };
      case SEND_MESSAGE_REQUEST:
         return {
            ...state,
            id: action.id,
            message: action.message,
            username: action.username
         };
      default:
         return state;
   }
};