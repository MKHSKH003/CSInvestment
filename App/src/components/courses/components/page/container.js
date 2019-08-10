import { connect } from 'react-redux'
import Courses from './component';
import {updateScheduleRequest} from '../../actions'
import { ToastActionsCreators } from 'react-native-redux-toast';

export const mapStateToProps = (state) => ({
    courses: state.CoursesReducer.courses,
    currentUser: state.loginReducer.student,
    devices: state.pushNotificationsReducer.devices,
    loadingCourses: state.CoursesReducer.status.loading,
    loadingStudentCourses: state.CoursesReducer.status.loading
})

const mapDispatchToProps = dispatch => ({
    sendInfo: (message) => { return dispatch(ToastActionsCreators.displayInfo(message));},
    updateSchedule: (id, date, venue, username) => { return dispatch(updateScheduleRequest(id, date, venue, username));},
})

export default connect(mapStateToProps,mapDispatchToProps)(Courses)

