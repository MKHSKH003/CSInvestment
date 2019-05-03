
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  POST_MARKET_UPDATE_REQUEST,
  loadMarketUpdatesSuccess,
} from '../../actions/marketUpdatesActions';

import {marketUpdatesApi} from '../../api';
import { marketUpdatesBaseUrl } from "../../constants/api-selectors.js";

export function* postMarketUpdate(action) {
  try 
  {   
      const marketUpdates = yield call(marketUpdatesApi.postMarketUpdates, marketUpdatesBaseUrl, action.avatar, action.caption);
      if(marketUpdates==undefined){throw Error;}
      yield put(ToastActionsCreators.displaySuccess('Market update uploaded successfully!', 5000));
      yield put(loadMarketUpdatesSuccess(marketUpdates));
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

