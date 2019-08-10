
import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ToastActionsCreators } from 'react-native-redux-toast'

import {
  LOAD_MESSAGES_REQUEST,
  LOAD_ALL_MESSAGES_REQUEST,
  SEND_MESSAGE_REQUEST,
  loadMessagesSuccess,
  sendMessageSuccess
} from './actions'

import {chatMessagesApi} from '../../../api'
import { chatMessagesBaseUrl } from '../../../shared/constants/api-selectors.js'

export function* getMessages(action) {
  try 
  {   
      const messages = yield call(chatMessagesApi.getMessages, chatMessagesBaseUrl, action.id);
      if(messages==undefined){throw Error;}
      yield put(loadMessagesSuccess(messages));
  }
  catch(e)
  {
    yield put(ToastActionsCreators.displayError(e.message, 20000));
  }

}

export function* watcherGetMessages() {
     yield takeLatest(LOAD_MESSAGES_REQUEST, getMessages)
}

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

export default function* () {
  yield all([
      watcherGetMessages(),
      watcherGetAllMessages(),
      watcherSendMessage()
    ]);
  }