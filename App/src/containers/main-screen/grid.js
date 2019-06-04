import { connect } from 'react-redux'
import { ToastActionsCreators } from 'react-native-redux-toast';

import MainGrid from '../../components/main-screen/grid';
import { loadStudentsRequest, loadStudentsSystemDataRequest } from '../../actions/studentsActions'
import { loadSystemDataRequest } from '../../actions/systemDataActions'
import { loadCoursesRequest, loadStudentCoursesRequest, loadCoursesSystemDataRequest, loadStudentCoursesSystemDataRequest } from '../../actions/coursesActions'
import { storeUserDevice } from '../../actions/pushNotificationsActions'
import { loadAllMessagesRequest, loadMessagesSystemDataRequest } from '../../actions/chatMessagesActions'
import { loadGroupsRequest, loadGroupsSystemDataRequest } from '../../actions/chatRoomsActions'
import { loadMarketUpdatesSystemDataRequest} from '../../actions/marketUpdatesActions'

const mapStateToProps = (state) => {
    return{
        currentUser: state.loginReducer.student,
    }
};

const mapDispatchToProps =(dispatch,props)=>{
    return{
      sendInfo: (message) => { return dispatch(ToastActionsCreators.displayInfo(message));},
      onLoadSystemData: ()=> {
                                dispatch(loadSystemDataRequest());
                                dispatch(loadStudentsSystemDataRequest());
                                dispatch(loadCoursesSystemDataRequest());
                                dispatch(loadStudentCoursesSystemDataRequest());
                                dispatch(loadMessagesSystemDataRequest());
                                dispatch(loadGroupsSystemDataRequest());
                                dispatch(loadMarketUpdatesSystemDataRequest());
                                dispatch(loadMarketUpdatesSystemDataRequest());
                             },
      onLoadStudents: ()=> dispatch(loadStudentsRequest()),
      onLoadCourses: ()=> dispatch(loadCoursesRequest()),
      onLoadStudentCourses: () => dispatch(loadStudentCoursesRequest()),
      onLoadMessages: ()=> dispatch(loadAllMessagesRequest()),
      onLoadGroups: ()=> dispatch(loadGroupsRequest()),
      storeUserDevice: (id, username, deviceToken) => dispatch(storeUserDevice(id, username, deviceToken))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainGrid)

