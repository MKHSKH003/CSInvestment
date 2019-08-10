
import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ToastActionsCreators } from 'react-native-redux-toast'

import {
  LOAD_MARKET_UPDATES_REQUEST,
  DELETE_MARKET_UPDATE_REQUEST,
  POST_MARKET_UPDATE_REQUEST,
  postMarketUpdatesSuccess,
  loadMarketUpdatesSuccess,
  deleteMarketUpdateSuccess
} from './actions';

import {marketUpdatesApi} from '../../../../../api'
import { marketUpdatesBaseUrl } from '../../../../../shared/constants/api-selectors'

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

export function* deletetMarketUpdate(action) {
  try 
  {   
      //yield call(marketUpdatesApi.deleteMarketUpdate, marketUpdatesBaseUrl, action.id);
      yield put(ToastActionsCreators.displayInfo('Market update deleted successfully!', 5000));
      yield put(deleteMarketUpdateSuccess(action.id));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 2000));
  }

}

export function* watcherDeleteMarketUpdate() {
     yield takeLatest(DELETE_MARKET_UPDATE_REQUEST, deletetMarketUpdate)
}

export function* postMarketUpdate(action) {
  try 
  {   
      yield call(marketUpdatesApi.postMarketUpdates, marketUpdatesBaseUrl, action.avatar, action.caption);
      yield put(ToastActionsCreators.displayInfo('Market update uploaded successfully!', 5000));
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

export default function* () {
  yield all([
      watcherDeleteMarketUpdate(),
      watcherMarketUpdates(),
      watcherPostMarketUpdate()
    ]);
  }