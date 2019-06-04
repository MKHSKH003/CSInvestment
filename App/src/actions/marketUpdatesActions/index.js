export const LOAD_MARKET_UPDATES_REQUEST = 'LOAD_MARKET_UPDATES_REQUEST';
export const LOAD_MARKET_UPDATES_SUCCESS = 'LOAD_MARKET_UPDATES_SUCCESS';
export const LOAD_MARKET_UPDATES_FAILURE = 'LOAD_MARKET_UPDATES_FAILURE';

export const POST_MARKET_UPDATE_REQUEST = 'POST_MARKET_UPDATE_REQUEST';
export const DELETE_REQUEST = 'DELETE_REQUEST';
export const LOAD_MARKET_UPDATES__SYSTEM_DATA_REQUEST = 'LOAD_MARKET_UPDATES__SYSTEM_DATA_REQUEST';

export const loadMarketUpdatesSystemDataRequest = () => ({
      type: LOAD_MARKET_UPDATES__SYSTEM_DATA_REQUEST
});

export const loadMarketUpdatesRequest = () => ({
      type: LOAD_MARKET_UPDATES_REQUEST
});

export const PostMarketUpdateRequest = (avatar, caption) =>  ({
      type: POST_MARKET_UPDATE_REQUEST,
      avatar,
      caption
});

export const loadMarketUpdatesSuccess = (marketUpdates) => ({
      type: LOAD_MARKET_UPDATES_SUCCESS,
      marketUpdates
});

export const deleteRequest = (id) => ({
      type: DELETE_REQUEST,
      id
});