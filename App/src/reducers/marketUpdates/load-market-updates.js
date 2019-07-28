import {
 LOAD_MARKET_UPDATES_REQUEST,
 LOAD_MARKET_UPDATES_SUCCESS,
 LOAD_MARKET_UPDATES__SYSTEM_DATA_REQUEST,
 DELETE_MARKET_UPDATE_SUCCESS,
 POST_MARKET_UPDATES_SUCCESS
} from '../../actions/marketUpdatesActions'

export const initialState = {
    marketUpdates:[],
    status: {
        loading: false, 
    }
};

const loadMarketUpdatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MARKET_UPDATES__SYSTEM_DATA_REQUEST:{
        return { ...state,
                status:{
                    loading:true
                 }
        };
     }
     case LOAD_MARKET_UPDATES_REQUEST:{
        return { ...state,
                status:{
                    loading:true
                 }
        };
     }
     case LOAD_MARKET_UPDATES_SUCCESS:{
        return { ...state, 
                 marketUpdates:action.marketUpdates,
                 status:{
                    loading:false
                 }
            };
     }
     case DELETE_MARKET_UPDATE_SUCCESS:{
      console.log('DELETE_MARKET_UPDATE_SUCCESS', action.id);
      console.log('DELETE_MARKET_UPDATE_SUCCESS', state.marketUpdates);
      
      return { ...state, 
               marketUpdates: state.marketUpdates.filter(mu => mu.Id != action.id)
          };
      }
      case POST_MARKET_UPDATES_SUCCESS:{
         console.log('state', state.marketUpdates);
         return { ...state, 
                  marketUpdates:state.marketUpdates.concat([{'Id':0,'Avatar':action.avatar,'Caption':action.caption}])
             };
         } 
     default:
        return state;
   }
};

export default loadMarketUpdatesReducer;