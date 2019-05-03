
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOAD_COURSES_REQUEST,
  loadCoursesSuccess,
} from '../../actions/coursesActions';

import {coursesApi} from '../../api';
import { coursesBaseUrl } from "../../constants/api-selectors.js";

export function* getCourses() {
  try 
  {   
      const courses = yield call(coursesApi.getCourses, coursesBaseUrl);
      if(courses==undefined){throw Error;}
      yield put(loadCoursesSuccess(courses));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherGetCourses() {
     yield takeLatest(LOAD_COURSES_REQUEST, getCourses)
}

export function* getCoursesSaga() {
    yield call(watcherGetCourses);
}

