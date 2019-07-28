
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import {
  SEND_MESSAGE_REQUEST,
} from '../../actions/chatMessagesActions';

import {
  sendMessageSuccess,
} from '../../actions/chatRoomsActions';

import {chatMessagesApi} from '../../api';
import { chatMessagesBaseUrl } from "../../constants/api-selectors.js";

export function* sendMessage(action) {
  try 
  {   
      yield call(chatMessagesApi.sendMessage, chatMessagesBaseUrl, action.id, action.username, action.userId, action.message);
      yield put(sendMessageSuccess(action.id, action.username, action.message));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 2000));
  }

}

export function* watcherSendMessage() {
     yield takeLatest(SEND_MESSAGE_REQUEST, sendMessage)
}

export function* sendMessageSaga() {
    yield call(watcherSendMessage);
}

