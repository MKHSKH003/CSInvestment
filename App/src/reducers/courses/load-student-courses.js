import {
 LOAD_STUDENT_COURSES_REQUEST,
 LOAD_STUDENT_COURSES_SUCCESS,
 LOAD_STUDENT_COURSES_FAILURE
} from '../../actions/coursesActions'

export const initialState = {
    studentCourses:[],
    status: {
        loading: false, 
        received:false 
    }
};

const loadStudentCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STUDENT_COURSES_REQUEST:{
        return { ...state,
                studentCourses:[],
                status:{
                    loading:true
                 }
        };
     }
     case LOAD_STUDENT_COURSES_SUCCESS:{
        return { ...state, 
                 studentCourses:action.studentCourses,
                 status:{
                    loading:false
                 }
            };
     }
     case LOAD_STUDENT_COURSES_FAILURE:{
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

export default loadStudentCoursesReducer;