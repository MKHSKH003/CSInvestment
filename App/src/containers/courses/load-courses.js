import { connect } from 'react-redux'
import Courses from '../../components/courses/view-courses';
import {updateScheduleRequest} from '../../actions/coursesActions'
import { ToastActionsCreators } from 'react-native-redux-toast';

export const mapStateToProps = (state) => {
    return {
        courses: state.loadCoursesReducer.courses,
        studentCourses: state.loadStudentCoursesReducer.studentCourses,
        currentUser: state.loginReducer.student,
        chatRoomMessages: state.loadMessagesReducer.messages,
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     sendInfo: (message) => { return dispatch(ToastActionsCreators.displayInfo(message));},
     updateSchedule: (id, date, venue, username) => { return dispatch(updateScheduleRequest(id, date, venue, username));},
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Courses)

