export const LOAD_SYSTEM_DATA_REQUEST = 'LOAD_SYSTEM_DATA_REQUEST';
export const LOAD_SYSTEM_DATA_SUCCESS = 'LOAD_SYSTEM_DATA_SUCCESS';
export const LOAD_SYSTEM_DATA_FAILURE = 'LOAD_SYSTEM_DATA_FAILURE';

export const loadSystemDataRequest = () => {
    return{
      type: LOAD_SYSTEM_DATA_REQUEST,
   }
};

export const loadSystemDataSuccess = (systemData) => ({
      type: LOAD_SYSTEM_DATA_SUCCESS,
      systemData
});