import {
 ADD_STUDENT_REQUEST,
 ADD_STUDENT_SUCCESS,
 ADD_STUDENT_FAILURE
} from '../../actions/studentsActions'

export const initialState = {
    student:{
        name:null,
        cell:null,
        email:null,
        location:null,
        admin:null,
        createdBy:null
    },
    status: {
        loading:false
    }
};

const addStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT_REQUEST:{
        return { ...state,
                student:{
                    name:action.name,
                    cell:action.cell,
                    email:action.email,
                    location:action.location,
                    admin:action.admin,
                    createdBy:action.createdBy
                },
                status:{
                    loading:true
                 }
        };
     }
     case ADD_STUDENT_SUCCESS:{
        return { ...state, 
                 status:{
                    loading:false
                 }
            };
     }
     case ADD_STUDENT_FAILURE:{
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

export default addStudentReducer;