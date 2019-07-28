export const LOAD_GROUPS_REQUEST = 'LOAD_GROUPS_REQUEST';
export const LOAD_GROUPS_SUCCESS = 'LOAD_GROUPS_SUCCESS';
export const LOAD_GROUPS_FAILURE = 'LOAD_GROUPS_FAILURE';

export const LOAD_GROUPS_SYSTEM_DATA_REQUEST = 'LOAD_GROUPS_SYSTEM_DATA_REQUEST';

export const SEND_MESSAGE_TO_GROUP_SUCCESS = 'SEND_MESSAGE_TO_GROUP_SUCCESS';

export const loadGroupsSystemDataRequest = () => ({
      type: LOAD_GROUPS_SYSTEM_DATA_REQUEST,
});

export const loadGroupsSuccess = (groups) => ({
      type: LOAD_GROUPS_SUCCESS,
      groups
});

export const loadGroupsRequest = () => {
    return{
      type: LOAD_GROUPS_REQUEST,
   }
};

export const loadGroupsFailure = () => ({
      type: LOAD_GROUPS_FAILURE,
});

export const sendMessageSuccess = (id, username, message) => ({
      type: SEND_MESSAGE_TO_GROUP_SUCCESS,
      id,
      username,
      message
});