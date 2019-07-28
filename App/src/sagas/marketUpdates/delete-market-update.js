
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  DELETE_MARKET_UPDATE_REQUEST,
  deleteMarketUpdateSuccess
} from '../../actions/marketUpdatesActions';

import {marketUpdatesApi} from '../../api';
import { marketUpdatesBaseUrl } from "../../constants/api-selectors.js";

export function* deletetMarketUpdate(action) {
  try 
  {   
      yield call(marketUpdatesApi.deleteMarketUpdate, marketUpdatesBaseUrl, action.id);
      yield put(ToastActionsCreators.displaySuccess('Market update deleted successfully!', 5000));
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

export function* deleteMarketUpdateSaga() {
    yield call(watcherDeleteMarketUpdate);
}

