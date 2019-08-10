import { connect } from 'react-redux'
import ChatRoom from './component';
import {loadMessagesRequest, sendMessageRequest} from '../../actions'
import { ToastActionsCreators } from 'react-native-redux-toast';
import { selectChatGroups } from '../../selectors'

export const mapStateToProps = (state) => ({
    groups: selectChatGroups(state.GroupsReducer.groups),
    loading: state.GroupsReducer.status.loading,
    currentUser: state.loginReducer.student,
    loadingMessages: state.MessagesReducer.status.loading
});

const mapDispatchToProps = (dispatch) => ({
    sendInfo: (message) => { return dispatch(ToastActionsCreators.displayInfo(message));},
    loadMessages: (id) => { return dispatch(loadMessagesRequest(id));},
    sendMessage: (id, username, userId, message) => { return dispatch(sendMessageRequest(id, username, userId, message));}
});

export default connect(mapStateToProps,mapDispatchToProps)(ChatRoom)

