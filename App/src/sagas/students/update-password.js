
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  UPDATE_PASSWORD,
  loadStudentsSuccess,
} from '../../actions/studentsActions';

import {studentsApi} from '../../api';
import { studentsBaseUrl } from "../../constants/api-selectors.js";

export function* updatePassword(action) {
  try 
  {
    yield call(studentsApi.updatePassword, studentsBaseUrl, action.id, action.password);
    yield put(ToastActionsCreators.displaySuccess('Student password updated successfully!', 5000));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 2000));
  }

}

export function* watcherUpdatePassword() {
     yield takeLatest(UPDATE_PASSWORD, updatePassword)
}

export function* updatePasswordSaga() {
    yield call(watcherUpdatePassword);
}

