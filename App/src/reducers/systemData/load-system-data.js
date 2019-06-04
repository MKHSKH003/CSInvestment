import {
 LOAD_SYSTEM_DATA_REQUEST,
 LOAD_SYSTEM_DATA_SUCCESS,
 LOAD_SYSTEM_DATA_FAILURE
} from '../../actions/systemDataActions'

export const initialState = {
    systemData:{
        students:[],
        gruoups:[],
        courses:[],
        marketUpdates:[],
        chatRoomMessages:[],
        pushNotifications:[]
    },
    status: {
        loading: false, 
        received: false 
    }
};

const loadSystemDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SYSTEM_DATA_REQUEST:{
        return { ...state, 
                status:{
                    loading: true
                 }
        };
     }
     case LOAD_SYSTEM_DATA_SUCCESS:{
        return { ...state, 
                 systemData:action.systemData,
                 status:{
                    loading: false
                 }
            };
     }
     case LOAD_SYSTEM_DATA_FAILURE:{
        return { ...state, 
                 status:{
                    loading: false
                 }
            };
     }
     default:
        return state;
   }
};

export default loadSystemDataReducer;