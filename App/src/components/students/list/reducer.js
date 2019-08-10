import {
   LOAD_STUDENTS_REQUEST,
   LOAD_STUDENTS_SUCCESS,
   LOAD_STUDENTS_FAILURE,
   ADD_STUDENT_REQUEST,
   ADD_STUDENT_SUCCESS,
   ADD_STUDENT_FAILURE,
   ADD_COURSES_SUCCESS,
   UPDATE_IMAGE_SUCCESS,
   UPDATE_PAYMENT_STATUS_SUCCESS,
   DELETE_SUCCESS
} from './actions'

export const initialState = {
   students: [{
      StudentCourses: []
   }],
   status: {
      loading: false,
      received: false
   }
};

const updateStudentCourses = (studentCourses, courses) => {
   return courses.map(c => (
      studentCourses.some(sc => sc.CourseId === c.value) === false ? {
         ...c,
         CourseId: c.value,
         Course: { Id: c.value, Name: c.label }
      } : courses.some(f => f.value === c.value) && ({
         ...c,
         CourseId: c.value,
         Course: { Name: "duplicate" }
      })
   ))
}

export default (state = initialState, action) => {
   switch (action.type) {
      case LOAD_STUDENTS_REQUEST:
         return {
            ...state,
            status: {
               loading: true
            }
         };
      case LOAD_STUDENTS_SUCCESS:
         return {
            ...state,
            students: action.students,
            status: {
               loading: false
            }
         };
      case LOAD_STUDENTS_FAILURE:
         return {
            ...state,
            status: {
               loading: false
            }
         };
      case ADD_STUDENT_REQUEST:
         return {
            ...state,
            status: {
               loading: true
            }
         };
      case ADD_STUDENT_SUCCESS:
         return {
            ...state,
            status: {
               loading: false
            }
         };
      case ADD_STUDENT_FAILURE:
         return {
            ...state,
            status: {
               loading: false
            }
         };
      case ADD_COURSES_SUCCESS:
         return {
            ...state,
            students: state.students.map(s => (
               s.Id == action.id ? {
                  ...s,
                  StudentCourses: s.StudentCourses.concat(updateStudentCourses(s.StudentCourses, action.courses)).filter(f => f.Course.Name !== "duplicate")
               } : s
            )),
            status: {
               loading: false
            }
         };
      case UPDATE_IMAGE_SUCCESS:
         return {
            ...state,
            students: state.students.map(s => (
               s.Id == action.id ? {
                  ...s,
                  Image: action.image
               } : s
            )),
            status: {
               loading: false
            }
         };
      case UPDATE_PAYMENT_STATUS_SUCCESS:
         return {
            ...state,
            students: state.students.map(s => (
               s.Id == action.id ? {
                  ...s,
                  PaymentStatus: "Paid"
               } : s
            )),
            status: {
               loading: false
            }
         };
      case DELETE_SUCCESS:
         return {
            ...state,
            students: state.students.filter(s => s.Id !== action.id),
            status: {
               loading: false
            }
         };
      default:
         return state;
   }
};