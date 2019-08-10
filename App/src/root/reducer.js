import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import loginReducer  from '../components/login/reducer'
import StudentsReducer  from '../components/students/list/reducer'
import CoursesReducer from '../components/courses/reducer'
import MessagesReducer from '../components/chat-room/view/reducer'
import GroupsReducer from '../components/chat-room/list/reducer'
import MarketUpdatesReducer from '../components/financial-education/view/components/market-updates/reducer'
import pushNotificationsReducer from '../components/main-screen/reducer'

const rootReducer = combineReducers({
    loginReducer,
    StudentsReducer,
    CoursesReducer,
    MessagesReducer,
    GroupsReducer,
    MarketUpdatesReducer,
    pushNotificationsReducer,
    toast
});


export default rootReducer;