
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  LOAD_ALL_MESSAGES_REQUEST,
  loadMessagesSuccess,
} from '../../actions/chatMessagesActions';

import {chatMessagesApi} from '../../api';
import { chatMessagesBaseUrl } from "../../constants/api-selectors.js";

export function* getAllMessages() {
  try 
  {   
      const messages = yield call(chatMessagesApi.getAllMessages, chatMessagesBaseUrl);
      if(messages==undefined){throw Error;}
      yield put(loadMessagesSuccess(messages));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherGetAllMessages() {
     yield takeLatest(LOAD_ALL_MESSAGES_REQUEST, getAllMessages)
}

export function* getAllMessagesSaga() {
    yield call(watcherGetAllMessages);
}

