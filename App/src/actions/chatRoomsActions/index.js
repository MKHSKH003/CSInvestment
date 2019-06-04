export const LOAD_GROUPS_REQUEST = 'LOAD_GROUPS_REQUEST';
export const LOAD_GROUPS_SUCCESS = 'LOAD_GROUPS_SUCCESS';
export const LOAD_GROUPS_FAILURE = 'LOAD_GROUPS_FAILURE';

export const LOAD_GROUPS_SYSTEM_DATA_REQUEST = 'LOAD_GROUPS_SYSTEM_DATA_REQUEST';

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