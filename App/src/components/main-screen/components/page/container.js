import { connect } from 'react-redux'
import { ToastActionsCreators } from 'react-native-redux-toast';

import MainGrid from '../grid';
import { loadStudentsRequest } from '../../../students/list/actions'
import { loadCoursesRequest, loadStudentCoursesRequest } from '../../../courses/actions'
import { storeUserDeviceRequest } from '../../actions'
import { loadAllMessagesRequest } from '../../../chat-room/view/actions'
import { loadGroupsRequest } from '../../../chat-room/list/actions'
import { loadMarketUpdatesRequest} from '../../../financial-education/view/components/market-updates/actions'

const mapStateToProps = (state) => ({
    currentUser: state.loginReducer.student
})

const mapDispatchToProps =(dispatch) => ({ 
    sendInfo: (message) => { return dispatch(ToastActionsCreators.displayInfo(message));},
    onLoadStudents: ()=> dispatch(loadStudentsRequest()),
    onLoadCourses: ()=> dispatch(loadCoursesRequest()),
    onLoadStudentCourses: () => dispatch(loadStudentCoursesRequest()),
    onLoadMessages: ()=> dispatch(loadAllMessagesRequest()),
    onLoadGroups: ()=> dispatch(loadGroupsRequest()),
    storeUserDevice: (id, deviceToken) => dispatch(storeUserDeviceRequest(id, deviceToken)),
    onLoadMarketUpdates: ()=> dispatch(loadMarketUpdatesRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainGrid)

