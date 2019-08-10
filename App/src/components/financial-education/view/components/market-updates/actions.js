export const LOAD_MARKET_UPDATES_REQUEST = 'LOAD_MARKET_UPDATES_REQUEST';
export const LOAD_MARKET_UPDATES_SUCCESS = 'LOAD_MARKET_UPDATES_SUCCESS';
export const LOAD_MARKET_UPDATES_FAILURE = 'LOAD_MARKET_UPDATES_FAILURE';

export const POST_MARKET_UPDATE_REQUEST = 'POST_MARKET_UPDATE_REQUEST';
export const POST_MARKET_UPDATES_SUCCESS = 'POST_MARKET_UPDATES_SUCCESS';

export const DELETE_MARKET_UPDATE_REQUEST = 'DELETE_MARKET_UPDATE_REQUEST';
export const DELETE_MARKET_UPDATE_SUCCESS = 'DELETE_MARKET_UPDATE_SUCCESS';

export const loadMarketUpdatesRequest = () => ({
      type: LOAD_MARKET_UPDATES_REQUEST
});

export const PostMarketUpdateRequest = (avatar, caption) =>  ({
      type: POST_MARKET_UPDATE_REQUEST,
      avatar,
      caption
});

export const postMarketUpdatesSuccess = (avatar, caption) => ({
      type: POST_MARKET_UPDATES_SUCCESS,
      avatar,
      caption
});

export const loadMarketUpdatesSuccess = (marketUpdates) => ({
      type: LOAD_MARKET_UPDATES_SUCCESS,
      marketUpdates
});

export const deleteMarketUpdateRequest = (id) => ({
      type: DELETE_MARKET_UPDATE_REQUEST,
      id
});

export const deleteMarketUpdateSuccess = (id) => ({
      type: DELETE_MARKET_UPDATE_SUCCESS,
      id
});