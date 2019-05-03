
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  ADD_STUDENT_REQUEST,
  addStudentSuccess,
  addStudentFailure
} from '../../actions/studentsActions';

import {studentsApi} from '../../api';
import { studentsBaseUrl } from "../../constants/api-selectors.js";

export function* addStudent(action) {
  try 
  {   
      let addedSuccessfully = yield call(studentsApi.addStudent,studentsBaseUrl,action.name,action.cell,action.email, action.location, action.admin, action.createdBy);
      if(addedSuccessfully._bodyText == 'true')
      {
        yield put(ToastActionsCreators.displaySuccess('New student created successfully!', 5000));
        yield put(addStudentSuccess());
        Actions.mainScreen();
      }
      else
      { 
        yield put(ToastActionsCreators.displayError('Failed, please fill in '+addedSuccessfully._bodyText, 5000));
        yield put(addStudentFailure());
      }
  }
  catch(e)
  {
    yield put(addStudentFailure());
    yield put(ToastActionsCreators.displayError(e.message, 2000));
  }

}

export function* watcherAddStudent() {
     yield takeLatest(ADD_STUDENT_REQUEST, addStudent)
}

export function* addStudentSaga() {
    yield call(watcherAddStudent);
}

