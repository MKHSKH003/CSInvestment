import {
   LOAD_COURSES_REQUEST,
   LOAD_COURSES_SUCCESS,
   LOAD_COURSES_FAILURE,
   UPDATE_SCHEDULE_SUCCESS,
   LOAD_STUDENT_COURSES_REQUEST,
   LOAD_STUDENT_COURSES_SUCCESS
} from './actions'


export const initialState = {
   studentCourses: [],
   status: {
      loading: false,
      received: false
   }
};

export default (state = initialState, action) => {
   switch (action.type) {
      case LOAD_COURSES_REQUEST:
         return {
            ...state,
            status: {
               loading: true
            }
         };
      case LOAD_COURSES_SUCCESS:
         return {
            ...state,
            courses: action.courses,
            status: {
               loading: false
            }
         };
      case LOAD_COURSES_FAILURE:
         return {
            ...state,
            status: {
               loading: false
            }
         };
      case UPDATE_SCHEDULE_SUCCESS:
         return {
            ...state,
            courses: state.courses.map(c => (
               c.Id == action.id ? {
                  ...c,
                  Time: action.date == 'none' ? c.Time : action.date,
                  Venue: action.venue == 'none' ? c.Venu : action.venue
               } : c
            )),
            status: {
               loading: false
            }
         };
      case LOAD_STUDENT_COURSES_REQUEST:
         return {
            ...state,
            status: {
               loading: true
            }
         };
      case LOAD_STUDENT_COURSES_SUCCESS:
         return {
            ...state,
            studentCourses: action.studentCourses,
            status: {
               loading: false
            }
         };
      default:
         return state;
   }
};