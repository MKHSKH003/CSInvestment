import {
 LOAD_STUDENTS_REQUEST,
 LOAD_STUDENTS_SUCCESS,
 LOAD_STUDENTS_FAILURE
} from '../../actions/studentsActions'

export const initialState = {
    students:[],
    status: {
        loading: false, 
        received:false 
    }
};

const loadStudentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STUDENTS_REQUEST:{
        return { ...state,
                students:[],
                status:{
                    loading:true
                 }
        };
     }
     case LOAD_STUDENTS_SUCCESS:{
        return { ...state, 
                 students:action.students,
                 status:{
                    loading:false
                 }
            };
     }
     case LOAD_STUDENTS_FAILURE:{
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

export default loadStudentsReducer;