
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOGOUT,
  LOGIN,
  loginSuccess,
  loginFailure
} from '../../actions/loginActions';

import {loginApi} from '../../api';
import { loginBaseUrl } from "../../constants/api-selectors.js";

export function* userLogin(action) {
  try 
  {   
      let student = yield call(loginApi.login,loginBaseUrl,action.username, action.password);
      if(student==undefined){throw Error;}
      Actions.mainScreen();
      yield put(ToastActionsCreators.displaySuccess('Welcome '+action.username, 5000));
      yield put(loginSuccess(student));
   
  }
  catch(e)
  {
    console.log(e.message);
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

// export function* loginSaga() {
//     yield FOR(watcherLogin);
//     yield call(watcherLogout);
// }

export default [
    fork(watcherLogin),
    fork(watcherLogout),

];
