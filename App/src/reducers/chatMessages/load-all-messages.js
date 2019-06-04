import {
 LOAD_ALL_MESSAGES_REQUEST,
 LOAD_MESSAGES_SUCCESS,
 LOAD_MESSAGES_FAILURE,
 LOAD_MESSAGES_SYSTEM_DATA_REQUEST
} from '../../actions/chatMessagesActions'

export const initialState = {
    messages:[],
    status: {
        loading: false, 
    }
};

const loadAllMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES_SYSTEM_DATA_REQUEST:{
        return { ...state,
                status:{
                    loading:true
                 }
        };
     }
     case LOAD_ALL_MESSAGES_REQUEST:{
        return { ...state,
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

export default loadAllMessagesReducer;