
import { call, put, takeLatest, all } from 'redux-saga/effects'

import {
  STORE_USER_DEVICE_REQUEST,
  LOAD_USER_DEVICES_REQUEST,
  loadUserDevicesSuccess,
  storeUserDeviceSuccess
} from './actions'

import {pushNotificationsApi} from '../../api';
import { pushNotificationsBaseUrl } from '../../shared/constants/api-selectors'

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

export default function* () {
yield all([
    watcherStoreUserDevice(),
    watcherLoadUserDevices()
  ]);
}

