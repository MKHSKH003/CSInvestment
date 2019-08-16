
import { call, put, takeLatest, all } from 'redux-saga/effects';
import {Actions} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOAD_STUDENTS_REQUEST,
  ADD_COURSES_REQUEST,
  ADD_STUDENT_REQUEST,
  DELETE_REQUEST,
  UPDATE_PASSWORD,
  UPDATE_PAYMENT_STATUS_REQUEST,
  UPDATE_IMAGE_REQUEST,
  updateImageSuccess,
  updatePaymentStatusSuccess,
  deleteSuccess,
  addStudentFailure,
  addCoursesSuccess,
  loadStudentsSuccess,
  addStudentSuccess
} from './actions';

import {studentsApi} from '../../../api';
import { studentsBaseUrl } from '../../../shared/constants/api-selectors.js'
import sendPushNotifications from '../../../shared/utils/send-push-notifications'

export function* getStudents() {
  try 
  {   
      const students = yield call(studentsApi.getStudents, studentsBaseUrl);
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

export function* addCourses(action) {
  try 
  {   
      yield call(studentsApi.addCourses,studentsBaseUrl, action.id, action.courses, action.createdBy);
      yield put(ToastActionsCreators.displayInfo('Student course(s) updated successfully!', 5000));
      yield put(addCoursesSuccess(action.id, action.courses))
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 2000));
  }

}

export function* watcherAddCourses() {
     yield takeLatest(ADD_COURSES_REQUEST, addCourses)
}

export function* addStudent(action) {
  try 
  {   
      const addedSuccessfully = yield call(studentsApi.addStudent,studentsBaseUrl,action.name,action.cell,action.email, action.location, action.admin, action.createdBy);
      if(addedSuccessfully.message === "true")
      {
        yield put(ToastActionsCreators.displayInfo('New student created successfully!', 5000));
        sendPushNotifications(action.deviceTokens, 'New student '+action.name+' has been added.');
        yield put(addStudentSuccess())
        Actions.mainScreen();
      }
      else
      { 
        yield put(ToastActionsCreators.displayError('Failed, please fill in '+addedSuccessfully.message, 5000));
        yield put(addStudentFailure());
      }
  }
  catch(e)
  {
    console.log('addStudent-error', e.message);
    yield put(addStudentFailure());
    yield put(ToastActionsCreators.displayError(e.message, 2000));
  }

}

export function* watcherAddStudent() {
     yield takeLatest(ADD_STUDENT_REQUEST, addStudent)
}

export function* deleteStudent(action) {
  try 
  {   
      yield call(studentsApi.deleteStudent,studentsBaseUrl,action.id, action.username);
      yield put(ToastActionsCreators.displayInfo('Student deleted successfully!', 5000));
      yield put(deleteSuccess(action.id));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherDeleteStudent() {
     yield takeLatest(DELETE_REQUEST, deleteStudent)
}

export function* updatePassword(action) {
  try 
  {
    yield call(studentsApi.updatePassword, studentsBaseUrl, action.id, action.password);
    yield put(ToastActionsCreators.displayInfo('Student password updated successfully!', 5000));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 2000));
  }

}

export function* watcherUpdatePassword() {
     yield takeLatest(UPDATE_PASSWORD, updatePassword)
}

export function* updatePaymentStatus(action) {
  try 
  {   
      yield call(studentsApi.updatePaymentStatus,studentsBaseUrl,action.id,action.username);
      yield put(ToastActionsCreators.displayInfo('Payment status updated successfully!', 5000));
      yield put(updatePaymentStatusSuccess(action.id));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherUpdatePaymentStatus() {
     yield takeLatest(UPDATE_PAYMENT_STATUS_REQUEST, updatePaymentStatus)
}

export function* updateStudentImage(action) {
  try 
  {
    yield call(studentsApi.updateStudentImage, studentsBaseUrl, action.id, action.image, action.username);
    yield put(ToastActionsCreators.displayInfo('Student image updated successfully!', 5000));
    yield put(updateImageSuccess(action.id, action.image));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 2000));
  }

}

export function* watcherUpdateStudentImage() {
     yield takeLatest(UPDATE_IMAGE_REQUEST, updateStudentImage)
}

export default function* () {
  yield all([
      watcherGetStudents(),
      watcherAddCourses(),
      watcherAddStudent(),
      watcherDeleteStudent(),
      watcherUpdatePassword(),
      watcherUpdatePaymentStatus(),
      watcherUpdateStudentImage()
    ]);
  }