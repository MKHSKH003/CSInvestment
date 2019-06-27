import {
 LOGIN,
 LOGIN_SUCCESS,
 LOGIN_FAILURE

} from '../../actions/loginActions'

export const initialState = {
    airtcles: [],
    status: {
        loading: false,
        loadingError: false,
        received:false,
        isLoginSuccess: false
    }
};

const loginReducer = (state = {status:{isLoginSuccess: true}}, action) => {
  switch (action.type) {
    case LOGIN:{
        return { ...state,
                username: action.username, 
                password: action.password,
                status:{
                    isLoginSuccess: true,
                    loading: true, 
                 }
        };
     }
     case LOGIN_SUCCESS:{
        return { ...state, 
                 student: action.student,
                 status:{
                    isLoginSuccess: true ,
                    loading: false,
                 }
            };
     }
     case LOGIN_FAILURE:{
        return { ...state, 
                 status:{
                    isLoginSuccess: false ,
                    loading: false,
                 }
            };
     }
     default:
        return state;
   }
};

export default loginReducer;