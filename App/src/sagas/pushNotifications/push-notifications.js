
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  STORE_USER_DEVICE,
  loadUserDevicesSuccess
} from '../../actions/pushNotificationsActions';

import {pushNotificationsApi} from '../../api';
import { pushNotificationsBaseUrl } from "../../constants/api-selectors.js";

export function* addUserDevice(action) {
  try {   
      let userDevices = yield call(pushNotificationsApi.addUserDevice, pushNotificationsBaseUrl, action.id, action.username, action.deviceToken);
      if(userDevices==undefined){throw Error;}
      yield put(loadUserDevicesSuccess(userDevices));
  }
  catch(e) { yield put(ToastActionsCreators.displayError(e.message, 2000)); }
}

export function* watcherPushNotifications() {
     yield takeLatest(STORE_USER_DEVICE, addUserDevice)
}


export function* pushNotificationsSaga() {
    yield call(watcherPushNotifications);
}

