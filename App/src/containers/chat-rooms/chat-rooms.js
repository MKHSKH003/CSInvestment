import { connect } from 'react-redux'
import ChatRooms from '../../components/chat-rooms/chat-rooms';
import {loadMessagesRequest} from '../../actions/chatMessagesActions'
import { ToastActionsCreators } from 'react-native-redux-toast';

export const mapStateToProps = (state) => {
    return {
        groups: state.loadGroupsReducer.groups,
        loading: state.loadGroupsReducer.status.loading,
        currentUser: state.loginReducer.student,
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     sendInfo: (message) => { return dispatch(ToastActionsCreators.displayInfo(message));},
     loadMessages: (id) => { return dispatch(loadMessagesRequest(id));},
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ChatRooms)

