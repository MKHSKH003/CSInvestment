
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  UPDATE_PAYMENT_STATUS_REQUEST,
  updatePaymentStatusSuccess,
} from '../../actions/studentsActions';

import {studentsApi} from '../../api';
import { studentsBaseUrl } from "../../constants/api-selectors.js";

export function* updatePaymentStatus(action) {
  try 
  {   
      yield call(studentsApi.updatePaymentStatus,studentsBaseUrl,action.id,action.username);
      yield put(ToastActionsCreators.displaySuccess('Payment status updated successfully!', 5000));
      yield put(updatePaymentStatusSuccess(action.id));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherUpdatePaymentStatus() {
     yield takeLatest(UPDATE_PAYMENT_STATUS_REQUEST, updatePaymentStatus)
}

export function* updatePaymentStatusSaga() {
    yield call(watcherUpdatePaymentStatus);
}

