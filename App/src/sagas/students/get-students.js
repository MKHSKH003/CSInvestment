
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOAD_STUDENTS_REQUEST,
  loadStudentsSuccess,
} from '../../actions/studentsActions';

import {studentsApi} from '../../api';
import { studentsBaseUrl } from "../../constants/api-selectors.js";

export function* getStudents() {
  try 
  {   
      const students = yield call(studentsApi.getStudents,studentsBaseUrl);
      if(students==undefined){throw Error;}
      yield put(loadStudentsSuccess(students));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherGetStudents() {
     yield takeLatest(LOAD_STUDENTS_REQUEST, getStudents)
}

export function* getStudentsSaga() {
    yield call(watcherGetStudents);
}

