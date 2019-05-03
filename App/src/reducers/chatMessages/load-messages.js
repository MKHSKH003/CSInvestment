import {
 LOAD_MESSAGES_REQUEST,
 LOAD_MESSAGES_SUCCESS,
 LOAD_MESSAGES_FAILURE
} from '../../actions/chatMessagesActions'

export const initialState = {
    id:'',
    messages:[],
    status: {
        loading: false, 
    }
};

const loadMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES_REQUEST:{
        return { ...state,
                id:action.id,
                status:{
                    loading:true
                 }
        };
     }
     case LOAD_MESSAGES_SUCCESS:{
        return { ...state, 
                 messages:action.messages,
                 status:{
                    loading:false
                 }
            };
     }
     case LOAD_MESSAGES_FAILURE:{
        return { ...state, 
                 status:{
                    loading:false
                 }
            };
     }
     default:
        return state;
   }
};

export default loadMessagesReducer;