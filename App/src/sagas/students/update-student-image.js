
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  UPDATE_IMAGE_REQUEST,
  updateImageSuccess
} from '../../actions/studentsActions';

import {studentsApi} from '../../api';
import { studentsBaseUrl } from "../../constants/api-selectors.js";

export function* updateStudentImage(action) {
  try 
  {
    yield call(studentsApi.updateStudentImage, studentsBaseUrl, action.id, action.image, action.username);
    yield put(ToastActionsCreators.displaySuccess('Student image updated successfully!', 5000));
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

export function* updateStudentImageSaga() {
    yield call(watcherUpdateStudentImage);
}

