import { connect } from 'react-redux'
import { ToastActionsCreators } from 'react-native-redux-toast';

import MainGrid from '../../components/main-screen/grid';
import { loadStudentsRequest, loadStudentsSystemDataRequest } from '../../actions/studentsActions'
import { loadSystemDataRequest } from '../../actions/systemDataActions'
import { loadCoursesRequest, loadStudentCoursesRequest, loadCoursesSystemDataRequest, loadStudentCoursesSystemDataRequest } from '../../actions/coursesActions'
import { storeUserDeviceRequest, loadUserDevicesRequest } from '../../actions/pushNotificationsActions'
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
      onLoadStudents: ()=> dispatch(loadStudentsRequest()),
      onLoadCourses: ()=> dispatch(loadCoursesRequest()),
      onLoadStudentCourses: () => dispatch(loadStudentCoursesRequest()),
      onLoadMessages: ()=> dispatch(loadAllMessagesRequest()),
      onLoadGroups: ()=> dispatch(loadGroupsRequest()),
      storeUserDevice: (id, deviceToken) => dispatch(storeUserDeviceRequest(id, deviceToken)),
      onLoadUserDevices: ()=> dispatch(loadUserDevicesRequest())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainGrid)

