
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import { LOAD_SYSTEM_DATA_REQUEST, loadSystemDataSuccess } from '../../actions/systemDataActions';
import { loadStudentsSuccess } from '../../actions/studentsActions';
import { loadMessagesSuccess } from '../../actions/chatMessagesActions';
import { loadGroupsSuccess } from '../../actions/chatRoomsActions';
import { loadCoursesSuccess } from '../../actions/coursesActions';
import { loadStudentCoursesSuccess } from '../../actions/coursesActions';
import { loadMarketUpdatesSuccess } from '../../actions/marketUpdatesActions';
import { loadUserDevicesSuccess } from '../../actions/pushNotificationsActions';

import {systemDataApi} from '../../api';
import { systemDataBaseUrl } from "../../constants/api-selectors.js";

export function* getSystemData() {
  try 
  {   
      const systemData = yield call(systemDataApi.getSystemData, systemDataBaseUrl);
      if(systemData==undefined){throw Error;}
      yield put(loadStudentsSuccess(systemData.students));
      yield put(loadMessagesSuccess(systemData.messages));
      yield put(loadGroupsSuccess(systemData.groups));
      yield put(loadCoursesSuccess(systemData.courses));
      yield put(loadStudentCoursesSuccess(systemData.studentCourses));
      yield put(loadMarketUpdatesSuccess(systemData.marketUpdates));
      yield put(loadUserDevicesSuccess(systemData.pushNotifications));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherGetSystemData() {
     yield takeLatest(LOAD_SYSTEM_DATA_REQUEST, getSystemData)
}

export function* getSystemDataSaga() {
    yield call(watcherGetSystemData);
}

