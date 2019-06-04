import {
 LOAD_MARKET_UPDATES_REQUEST,
 LOAD_MARKET_UPDATES_SUCCESS,
 LOAD_MARKET_UPDATES__SYSTEM_DATA_REQUEST
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

     default:
        return state;
   }
};

export default loadMarketUpdatesReducer;