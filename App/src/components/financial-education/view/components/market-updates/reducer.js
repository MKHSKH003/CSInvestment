import {
   LOAD_MARKET_UPDATES_REQUEST,
   LOAD_MARKET_UPDATES_SUCCESS,
   LOAD_MARKET_UPDATES__SYSTEM_DATA_REQUEST,
   DELETE_MARKET_UPDATE_SUCCESS,
   POST_MARKET_UPDATES_SUCCESS
} from './actions'

export const initialState = {
   marketUpdates: [],
   status: {
      loading: false,
   }
};

export default (state = initialState, action) => {
   switch (action.type) {
      case LOAD_MARKET_UPDATES__SYSTEM_DATA_REQUEST:
         return {
            ...state,
            status: {
               loading: true
            }
         };
      case LOAD_MARKET_UPDATES_REQUEST:
         return {
            ...state,
            status: {
               loading: true
            }
         };
      case LOAD_MARKET_UPDATES_SUCCESS:
         return {
            ...state,
            marketUpdates: action.marketUpdates,
            status: {
               loading: false
            }
         };
      case DELETE_MARKET_UPDATE_SUCCESS:
         return {
            ...state,
            marketUpdates: state.marketUpdates.filter(mu => mu.Id != action.id)
         };
      case POST_MARKET_UPDATES_SUCCESS:
         return {
            ...state,
            marketUpdates: ([{ 'Id': 0, 'Avatar': action.avatar, 'Caption': action.caption }]).concat(state.marketUpdates)
         };
      default:
         return state;
   }
};