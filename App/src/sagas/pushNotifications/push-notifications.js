
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  STORE_USER_DEVICE_REQUEST,
  LOAD_USER_DEVICES_REQUEST,
  loadUserDevicesSuccess,
  storeUserDeviceSuccess
} from '../../actions/pushNotificationsActions';

import {pushNotificationsApi} from '../../api';
import { pushNotificationsBaseUrl } from "../../constants/api-selectors.js";

export function* addUserDevice(action) {
  yield call(pushNotificationsApi.addUserDevice, pushNotificationsBaseUrl, action.userId, action.deviceToken);
  yield put(storeUserDeviceSuccess(action.userId, action.deviceToken));
}

export function* watcherStoreUserDevice() {
     yield takeLatest(STORE_USER_DEVICE_REQUEST, addUserDevice)
}

export function* loadUserDevices() {
    let userDevices = yield call(pushNotificationsApi.getUserDevices, pushNotificationsBaseUrl);
    yield put(loadUserDevicesSuccess(userDevices));
}

export function* watcherLoadUserDevices() {
  yield takeLatest(LOAD_USER_DEVICES_REQUEST, loadUserDevices)
}

export function* pushNotificationsSaga() {
yield all([
    watcherStoreUserDevice(),
    watcherLoadUserDevices()
  ]);
}

