import { connect } from 'react-redux'
import MainGrid from '../../components/main-screen/grid';
import {loadStudentsRequest} from '../../actions/studentsActions'
import {loadCoursesRequest, loadStudentCoursesRequest} from '../../actions/coursesActions'
import {storeUserDevice} from '../../actions/pushNotificationsActions'
import {loadAllMessagesRequest} from '../../actions/chatMessagesActions'
import {loadGroupsRequest} from '../../actions/chatRoomsActions'
import { ToastActionsCreators } from 'react-native-redux-toast';

const mapStateToProps = (state) => {
    return{
        currentUser: state.loginReducer.student,
    }
};

const mapDispatchToProps =(dispatch,props)=>{
    return{
      sendInfo: (message) => { return dispatch(ToastActionsCreators.displayInfo(message));},
      onLoadStudents: ()=> dispatch(loadStudentsRequest()),
      onLoadCourses: ()=> dispatch(loadCoursesRequest()),
      onLoadStudentCourses: () => dispatch(loadStudentCoursesRequest()),
      onLoadMessages: ()=> dispatch(loadAllMessagesRequest()),
      onLoadGroups: ()=> dispatch(loadGroupsRequest()),
      storeUserDevice: (id, username, deviceToken) => dispatch(storeUserDevice(id, username, deviceToken))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainGrid)

