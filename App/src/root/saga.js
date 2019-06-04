import { all } from 'redux-saga/effects';

import loginSaga from '../sagas/login'
import {addStudentSaga} from '../sagas/students/add-student'
import {getStudentsSaga} from '../sagas/students/get-students'
import {updateStudentImageSaga} from '../sagas/students/update-student-image'
import {updatePaymentStatusSaga} from '../sagas/students/update-payment-status'
import {deleteStudentSaga} from '../sagas/students/delete-student'
import {getCoursesSaga} from '../sagas/courses/load-courses'
import {getStudentCoursesSaga} from '../sagas/courses/load-student-courses' 
import {addCoursesSaga} from '../sagas/students/add-courses'
import {getMessagesSaga} from '../sagas/chatMessages/load-messages'
import {updateScheduleSaga} from '../sagas/courses/update-schedule'
import {getGroupsSaga} from '../sagas/chatRooms/load-groups'
import {sendMessageSaga} from '../sagas/chatMessages/send-message'
import {getAllMessagesSaga} from '../sagas/chatMessages/load-all-messages'
import {updatePasswordSaga} from '../sagas/students/update-password'
import {marketUpdatesSaga} from '../sagas/marketUpdates/market-updates'
import {postMarketUpdateSaga} from '../sagas/marketUpdates/post-market-update'
import {deleteMarketUpdateSaga} from '../sagas/marketUpdates/delete-market-update'
import {pushNotificationsSaga} from '../sagas/pushNotifications/push-notifications'
import {getSystemDataSaga} from '../sagas/systemData/get-system-data'

export default function* () {
    yield all([
        loginSaga,
        addStudentSaga(),
        addCoursesSaga(),
        getStudentsSaga(),
        updateStudentImageSaga(),
        updatePaymentStatusSaga(),
        deleteStudentSaga(),
        getCoursesSaga(),
        getStudentCoursesSaga(),
        updatePasswordSaga(),
        updateScheduleSaga(),
        getMessagesSaga(),
        getAllMessagesSaga(),
        sendMessageSaga(),
        getGroupsSaga(),
        marketUpdatesSaga(),
        postMarketUpdateSaga(),
        deleteMarketUpdateSaga(),
        pushNotificationsSaga(),
        getSystemDataSaga()
   ]);
}

