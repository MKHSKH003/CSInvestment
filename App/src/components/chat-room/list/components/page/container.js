import { connect } from 'react-redux'
import ChatRooms from './component';
import { ToastActionsCreators } from 'react-native-redux-toast';

export const mapStateToProps = state => ({
    groups: state.GroupsReducer.groups,
    currentUser: state.loginReducer.student,
})

const mapDispatchToProps = dispatch => ({
    sendInfo: (message) => dispatch(ToastActionsCreators.displayInfo(message))
})

export default connect(mapStateToProps,mapDispatchToProps)(ChatRooms)

