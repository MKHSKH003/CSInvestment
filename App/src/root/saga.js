import { all } from 'redux-saga/effects';

import loginSaga from '../components/login/saga'
import getStudentsSaga from '../components/students/list/saga'
import getCoursesSaga from '../components/courses/saga'
import getChatMessagesSaga from '../components/chat-room/view/saga'
import getGroupsSaga from '../components/chat-room/list/saga'
import marketUpdatesSaga from '../components/financial-education/view/market-updates/saga'
import pushNotificationsSaga from '../components/main-screen/saga'

export default function* () {
    yield all([
        loginSaga(),
        getStudentsSaga(),
        getCoursesSaga(),
        getChatMessagesSaga(),
        getGroupsSaga(),
        marketUpdatesSaga(),
        pushNotificationsSaga()
   ]);
}

