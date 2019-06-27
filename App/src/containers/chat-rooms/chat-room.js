import { connect } from 'react-redux'
import ChatRoom from '../../components/chat-rooms/chat-room'
import {sendMessageRequest} from '../../actions/chatMessagesActions'

export const mapStateToProps = (state) => {
    return {
        loading: state.loadMessagesReducer.status.loading,
        username: state.loginReducer.username,
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     sendMessage: (id, username, message) => { return dispatch(sendMessageRequest(id, username, message));},
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ChatRoom)

