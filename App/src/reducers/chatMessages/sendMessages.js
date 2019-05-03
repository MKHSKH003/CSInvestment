import {
 SEND_MESSAGE_REQUEST,
 SEND_MESSAGE_SUCCESS,
} from '../../actions/chatMessagesActions'

export const initialState = {
    id:'',
    message:'',
    username:'',
    status: {
        loading: false, 
    }
};

const sendMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:{
        return { ...state,
                id:action.id,
                message:action.message,
                username:action.username,
                status:{
                    loading: true, 
                 }
        };
     }
     case SEND_MESSAGE_SUCCESS:{
        return { ...state,
                 messages:action.messages,
                 status:{
                    loading: false, 
                 }
            };
     }
    
     default:
        return state;
   }
};

export default sendMessageReducer;