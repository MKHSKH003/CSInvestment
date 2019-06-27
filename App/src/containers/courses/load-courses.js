import { connect } from 'react-redux'
import Courses from '../../components/courses/view-courses';
import {updateScheduleRequest} from '../../actions/coursesActions'
import { ToastActionsCreators } from 'react-native-redux-toast';

export const mapStateToProps = (state) => {
    return {
        courses: state.loadCoursesReducer.courses,
        currentUser: state.loginReducer.student,
        devices: state.pushNotificationsReducer.devices
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     sendInfo: (message) => { return dispatch(ToastActionsCreators.displayInfo(message));},
     updateSchedule: (id, date, venue, username) => { return dispatch(updateScheduleRequest(id, date, venue, username));},
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Courses)

