import {
 LOAD_COURSES_REQUEST,
 LOAD_COURSES_SUCCESS,
 LOAD_COURSES_FAILURE,
 LOAD_COURSES_SYSTEM_DATA_REQUEST
} from '../../actions/coursesActions'

export const initialState = {
    courses:[],
    status: {
        loading: false, 
        received:false 
    }
};

const loadCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COURSES_SYSTEM_DATA_REQUEST:{
        return { ...state,
                status:{
                    loading:true
                 }
        };
     }
     case LOAD_COURSES_REQUEST:{
        return { ...state,
                status:{
                    loading:true
                 }
        };
     }
     case LOAD_COURSES_SUCCESS:{
        return { ...state, 
                 courses:action.courses,
                 status:{
                    loading:false
                 }
            };
     }
     case LOAD_COURSES_FAILURE:{
        return { ...state, 
                 status:{
                    loading:false
                 }
            };
     }
     default:
        return state;
   }
};

export default loadCoursesReducer;