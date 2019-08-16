import {
   LOAD_GROUPS_REQUEST,
   LOAD_GROUPS_SUCCESS,
   LOAD_GROUPS_FAILURE
} from './actions'

import { SEND_MESSAGE_SUCCESS } from '../view/actions'

export const initialState = {
   groups: [{
      Id: 0,
      Name: '',
      Messages: [{
         Student: { Name: '' }
      }],
      StudentChatRooms: []
   }],
   status: {
      loading: false
   }
};

const getTimeStamp = () => {
   var date = new Date();
   return (date.getMonth() + 1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
}

export default (state = initialState, action) => {
   switch (action.type) {
      case LOAD_GROUPS_REQUEST:
         return {
            ...state,
            status: {
               loading: true
            }
         };
      case LOAD_GROUPS_SUCCESS:
         return {
            ...state,
            groups: action.groups,
            status: {
               loading: false
            }
         };
      case LOAD_GROUPS_FAILURE:
         return {
            ...state,
            status: {
               loading: false
            }
         };
      case SEND_MESSAGE_SUCCESS:
         return {
            ...state,
            groups: state.groups.map(g => (
               g.Id == action.id ? {
                  ...g,
                  Messages: g.Messages.concat(([{ 'Id':Math.max(...(g.Messages).map(m => m.Id))+1, 'Date': getTimeStamp(), 'ChatRoomId': action.id, 'UserMessage': action.message, 'Student': { 'Name': action.username } }])),
               } : g
            )),

            status: {
               loading: false,
            }
         };
      default:
         return state;
   }
};