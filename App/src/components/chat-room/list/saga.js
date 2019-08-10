
import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ToastActionsCreators } from 'react-native-redux-toast'

import {
  LOAD_GROUPS_REQUEST,
  loadGroupsSuccess,
} from './actions'

import { chatRoomsApi } from '../../../api'
import { chatRoomsBaseUrl } from '../../../shared/constants/api-selectors'

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

export default function* () {
  yield all([
      watcherGetGroups()
    ]);
  }