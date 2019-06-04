import {
 LOAD_GROUPS_REQUEST,
 LOAD_GROUPS_SUCCESS,
 LOAD_GROUPS_FAILURE,
 LOAD_GROUPS_SYSTEM_DATA_REQUEST
} from '../../actions/chatRoomsActions'

export const initialState = {
    groups:[],
    status: {
        loading: false
    }
};

const loadGroupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GROUPS_SYSTEM_DATA_REQUEST:{
        return { ...state,
                status:{
                    loading:true
                 }
        };
     }
     case LOAD_GROUPS_REQUEST:{
        return { ...state,
                status:{
                    loading:true
                 }
        };
     }
     case LOAD_GROUPS_SUCCESS:{
        return { ...state, 
                 groups:action.groups,
                 status:{
                    loading:false
                 }
            };
     }
     case LOAD_GROUPS_FAILURE:{
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

export default loadGroupsReducer;