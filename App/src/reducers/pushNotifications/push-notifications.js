import {
 LOAD_USER_DEVICES,
 LOAD_USER_DEVICES_SUCCESS
} from '../../actions/pushNotificationsActions'

export const initialState = {
    devices:[],
    status: {
        loading: false, 
    }
};

const pushNotificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_DEVICES:{
        return { ...state,
                status:{
                    loading:true
                 }
        };
     }
     case LOAD_USER_DEVICES_SUCCESS:{
        return { ...state, 
                 devices: action.devices,
                 status:{
                    loading:false
                 }
            };
     }

     default:
        return state;
   }
};

export default pushNotificationsReducer;