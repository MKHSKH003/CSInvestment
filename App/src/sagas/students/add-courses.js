
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  ADD_COURSES_REQUEST,
  loadStudentsSuccess
} from '../../actions/studentsActions';

import {studentsApi} from '../../api';
import { studentsBaseUrl } from "../../constants/api-selectors.js";

export function* addCourses(action) {
  try 
  {   
      let students = yield call(studentsApi.addCourses,studentsBaseUrl, action.id, action.courses, action.createdBy);
      if(students==undefined){throw Error;}
      yield put(ToastActionsCreators.displaySuccess('Student course(s) updated successfully!', 5000));
      yield put(loadStudentsSuccess(students));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 2000));
  }

}

export function* watcherAddCourses() {
     yield takeLatest(ADD_COURSES_REQUEST, addCourses)
}

export function* addCoursesSaga() {
    yield call(watcherAddCourses);
}

