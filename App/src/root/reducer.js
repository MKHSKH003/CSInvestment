import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import loginReducer  from '../reducers/login'
import addStudentReducer  from '../reducers/students/add-student'
import loadStudentsReducer  from '../reducers/students/load-students'
import loadCoursesReducer from '../reducers/courses/load-courses'
import loadStudentCoursesReducer from '../reducers/courses/load-student-courses'
import loadMessagesReducer from '../reducers/chatMessages/load-messages'
import loadGroupsReducer from '../reducers/chatRooms/load-groups'
import loadAllMessagesReducer from '../reducers/chatMessages/load-all-messages'
import loadMarketUpdatesReducer from '../reducers/marketUpdates/load-market-updates'
import pushNotificationsReducer from '../reducers/pushNotifications/push-notifications'

const rootReducer = combineReducers({
    loginReducer,
    addStudentReducer,
    loadStudentsReducer,
    loadCoursesReducer,
    loadStudentCoursesReducer,
    loadMessagesReducer,
    loadAllMessagesReducer,
    loadGroupsReducer,
    loadMarketUpdatesReducer,
    pushNotificationsReducer,
    toast
});


export default rootReducer;