
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  UPDATE_SCHEDULE_REQUEST,
  loadCoursesSuccess,
} from '../../actions/coursesActions';

import {coursesApi} from '../../api';
import { coursesBaseUrl } from "../../constants/api-selectors.js";

export function* updateSchedule(action) {
  try 
  {   
      const courses = yield call(coursesApi.updateSchedule, coursesBaseUrl, action.id, action.date, action.venue, action.username);
      if(courses==undefined){throw Error;}
      yield put(ToastActionsCreators.displaySuccess('Schedule updated successfully!', 5000));
      yield put(loadCoursesSuccess(courses));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherUpdateSchedule() {
     yield takeLatest(UPDATE_SCHEDULE_REQUEST, updateSchedule)
}

export function* updateScheduleSaga() {
    yield call(watcherUpdateSchedule);
}

