
import { call, put, takeLatest, all } from 'redux-saga/effects'
import {Actions} from 'react-native-router-flux'
import { ToastActionsCreators } from 'react-native-redux-toast'

import {
  LOGOUT,
  LOGIN,
  loginSuccess,
  loginFailure
} from './actions';

import { loginApi } from '../../api';
import { loginBaseUrl } from '../../shared/constants/api-selectors'
import sendPushNotifications from '../../shared/utils/send-push-notifications'

export function* userLogin(action) {
  try 
  {   
      let student = yield call(loginApi.login,loginBaseUrl,action.username, action.password);
      if(student==undefined) throw Error;
      sendPushNotifications(action.deviceTokens, action.username+' is now online.');
      yield put(loginSuccess(student));
      Actions.mainScreen();
      yield put(ToastActionsCreators.displayInfo('Welcome '+action.username, 5000));
  }
  catch(e)
  {
    yield put(loginFailure());
  }

}

export function* watcherLogin() {
     yield takeLatest(LOGIN, userLogin)
}

export function* logout(action) {
  try 
  {   
      yield call(loginApi.logout,loginBaseUrl,action.username);
     Actions.loginScreen();
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherLogout() {
     yield takeLatest(LOGOUT, logout)
}


export default function* () {
  yield all([
      watcherLogin(),
      watcherLogout()
    ]);
  }