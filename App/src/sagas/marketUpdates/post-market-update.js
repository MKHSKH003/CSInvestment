
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  POST_MARKET_UPDATE_REQUEST,
  postMarketUpdatesSuccess,
} from '../../actions/marketUpdatesActions';

import {marketUpdatesApi} from '../../api';
import { marketUpdatesBaseUrl } from "../../constants/api-selectors.js";

export function* postMarketUpdate(action) {
  try 
  {   
      yield call(marketUpdatesApi.postMarketUpdates, marketUpdatesBaseUrl, action.avatar, action.caption);
      yield put(ToastActionsCreators.displaySuccess('Market update uploaded successfully!', 5000));
      yield put(postMarketUpdatesSuccess(action.avatar, action.caption));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 2000));
  }

}

export function* watcherPostMarketUpdate() {
     yield takeLatest(POST_MARKET_UPDATE_REQUEST, postMarketUpdate)
}

export function* postMarketUpdateSaga() {
    yield call(watcherPostMarketUpdate);
}

