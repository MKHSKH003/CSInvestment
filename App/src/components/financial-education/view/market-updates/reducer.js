import {
   LOAD_MARKET_UPDATES_REQUEST,
   LOAD_MARKET_UPDATES_SUCCESS,
   LOAD_MARKET_UPDATES__SYSTEM_DATA_REQUEST,
   DELETE_MARKET_UPDATE_SUCCESS,
   POST_MARKET_UPDATE_REQUEST,
   POST_MARKET_UPDATE_SUCCESS,
   POST_LIKE_REQUEST,
   POST_LIKE_SUCCESS
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
      case POST_MARKET_UPDATE_REQUEST:
         return {
            ...state,
            status: {
               loading: true
            }
         };
      case POST_MARKET_UPDATE_SUCCESS:
         return {
            ...state,
            marketUpdates: ([{
               ...action.post,
               Student: action.currentUser
            }]).concat(state.marketUpdates),
            status: {
               loading: false
            }
         };
      case POST_LIKE_REQUEST:
         return {
            ...state,
            marketUpdates: state.marketUpdates.map(mu => (
               mu.Id == action.id ? {
                  ...mu,
                  PostLikes: mu.PostLikes.concat({StudentId: action.userId, PostId: action.id})
               } : mu
            ))
         };
      default:
         return state;
   }
};