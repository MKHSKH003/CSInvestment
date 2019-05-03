
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOAD_GROUPS_REQUEST,
  loadGroupsSuccess,
} from '../../actions/chatRoomsActions';

import {chatRoomsApi} from '../../api';
import { chatRoomsBaseUrl } from "../../constants/api-selectors.js";

export function* getGroups() {
  try 
  {   
      const groups = yield call(chatRoomsApi.getGroups, chatRoomsBaseUrl);
      if(groups==undefined){throw Error;}
      yield put(loadGroupsSuccess(groups));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherGetGroups() {
     yield takeLatest(LOAD_GROUPS_REQUEST, getGroups)
}

export function* getGroupsSaga() {
    yield call(watcherGetGroups);
}

