import {
 LOGIN,
 LOGIN_SUCCESS,
 LOGIN_FAILURE,
 LOGOUT
} from './actions'

export const initialState = {
    student: [{
       Name: ''
    }],
    status: {
        loading: false,
    }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
         return { 
            ...state,
            username: action.username, 
            password: action.password,
            status:{
               loading: true, 
            }
        };
     case LOGIN_SUCCESS:
         return { 
           ...state, 
               student: action.student,
               status:{
                  isLoginSuccess: true ,
                  loading: false,
               }
         };
     case LOGOUT:
         return { 
            ...state, 
            status:{
               loading: false,
               isLoginSuccess: null
            }
         };
     case LOGIN_FAILURE:
        return { 
            ...state, 
            status:{
               isLoginSuccess: false ,
               loading: false,
            }
         };
     default:
        return state;
   }
};