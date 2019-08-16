
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOAD_COURSES_REQUEST,
  LOAD_STUDENT_COURSES_REQUEST,
  UPDATE_SCHEDULE_REQUEST,
  updateScheduleSuccess,
  loadStudentCoursesSuccess,
  loadCoursesSuccess
} from '../../components/courses/actions';

import {coursesApi} from '../../api';
import { coursesBaseUrl } from "../../shared/constants/api-selectors.js";

export function* getCourses() {
  try 
  {   
      const courses = yield call(coursesApi.getCourses, coursesBaseUrl);
      console.log('courses', courses);
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

export function* updateSchedule(action) {
  try 
  {   
      yield call(coursesApi.updateSchedule, coursesBaseUrl, action.id, action.date, action.venue, action.username);
      yield put(ToastActionsCreators.displayInfo('Schedule updated successfully!', 5000));
      yield put(updateScheduleSuccess(action.id, action.date, action.venue));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherUpdateSchedule() {
     yield takeLatest(UPDATE_SCHEDULE_REQUEST, updateSchedule)
}

export default function* () {
  yield all([
      watcherGetCourses(),
      watcherGetStudentCourses(),
      watcherUpdateSchedule()
    ]);
  }