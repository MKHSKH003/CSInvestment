
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOAD_STUDENT_COURSES_REQUEST,
  loadStudentCoursesSuccess,
} from '../../actions/coursesActions';

import {coursesApi} from '../../api';
import { coursesBaseUrl } from "../../constants/api-selectors.js";

export function* getStudentCourses() {
  try 
  {   
      const studentCourses = yield call(coursesApi.getStudentCourses, coursesBaseUrl);
      if(studentCourses==undefined){throw Error;}
      yield put(loadStudentCoursesSuccess(studentCourses));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherGetStudentCourses() {
     yield takeLatest(LOAD_STUDENT_COURSES_REQUEST, getStudentCourses)
}

export function* getStudentCoursesSaga() {
    yield call(watcherGetStudentCourses);
}

