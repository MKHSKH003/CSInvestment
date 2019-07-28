import { connect } from 'react-redux'
import ChatRoom from '../../components/chat-rooms/chat-room'
import {sendMessageRequest} from '../../actions/chatMessagesActions'

export const mapStateToProps = (state) => {
    return {
        loading: state.loadMessagesReducer.status.loading,
        username: state.loginReducer.username,
        groups: state.loadGroupsReducer.groups
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     sendMessage: (id, username, userId, message) => { return dispatch(sendMessageRequest(id, username, userId, message));},
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ChatRoom)

