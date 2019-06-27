import {
   LOAD_USER_DEVICES_REQUEST,
   LOAD_USER_DEVICES_SUCCESS,
   STORE_USER_DEVICE_SUCCESS
} from '../../actions/pushNotificationsActions'

export const initialState = {
   devices: [],
   status: {
      loading: false,
   }
};

const updateUserDevices = (userId, deviceToken, devices) => {
   return devices.filter(d => d.StudentId == userId).length == 0 ?
      devices.concat({ 'StudentId': userId, 'UserDeviceToken': deviceToken })
      : devices.map(d => (
         d.StudentId == userId ? {
            ...d,
            UserDeviceToken: deviceToken

         } : d
      ))
}

const pushNotificationsReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_USER_DEVICES_REQUEST: {
         return {
            ...state,
            status: {
               loading: true
            }
         };
      }
      case LOAD_USER_DEVICES_SUCCESS: {
         return {
            ...state,
            devices: action.devices,
            status: {
               loading: false
            }
         };
      }

      case STORE_USER_DEVICE_SUCCESS: {
         return {
            ...state,
            devices: updateUserDevices(action.userId, action.deviceToken, state.devices),
            status: {
               loading: false
            }
         };
      }
      default:
         return state;
   }
};

export default pushNotificationsReducer;