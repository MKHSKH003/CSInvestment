
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOAD_MARKET_UPDATES_REQUEST,
  loadMarketUpdatesSuccess,
} from '../../actions/marketUpdatesActions';

import {marketUpdatesApi} from '../../api';
import { marketUpdatesBaseUrl } from "../../constants/api-selectors.js";

export function* marketUpdates(action) {
  try 
  {   
      const marketUpdates = yield call(marketUpdatesApi.getMarketUpdates, marketUpdatesBaseUrl);
      if(marketUpdates==undefined){throw Error;}
      yield put(loadMarketUpdatesSuccess(marketUpdates));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherMarketUpdates() {
     yield takeLatest(LOAD_MARKET_UPDATES_REQUEST, marketUpdates)
}

export function* marketUpdatesSaga() {
    yield call(watcherMarketUpdates);
}

