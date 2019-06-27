export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';

export const LOAD_STUDENTS_REQUEST = 'LOAD_STUDENTS_REQUEST';
export const LOAD_STUDENTS_SUCCESS = 'LOAD_STUDENTS_SUCCESS';
export const LOAD_STUDENTS_FAILURE = 'LOAD_STUDENTS_FAILURE';

export const LOAD_SYSTEM_DATA_REQUEST = 'LOAD_SYSTEM_DATA_REQUEST';
export const LOAD_SYSTEM_DATA_SUCCESS = 'LOAD_SYSTEM_DATA_SUCCESS';
export const LOAD_SYSTEM_DATA_FAILURE = 'LOAD_SYSTEM_DATA_FAILURE';

export const LOAD_STUDENTS_SYSTEM_DATA_REQUEST = 'LOAD_STUDENTS_SYSTEM_DATA_REQUEST';

export const UPDATE_IMAGE_REQUEST = 'UPDATE_IMAGE_REQUEST';
export const UPDATE_IMAGE_SUCCESS = 'UPDATE_IMAGE_SUCCESS';

export const UPDATE_PAYMENT_STATUS_REQUEST = 'UPDATE_PAYMENT_STATUS_REQUEST';
export const UPDATE_PAYMENT_STATUS_SUCCESS = 'UPDATE_PAYMENT_STATUS_SUCCESS';

export const DELETE_REQUEST = 'DELETE_REQUEST';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';

export const ADD_COURSES_REQUEST ='ADD_COURSES_REQUEST';
export const ADD_COURSES_SUCCESS ='ADD_COURSES_SUCCESS';

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
 
export const addStudentRequest = (name, cell, email, location, admin, createdBy) => ({
      type: ADD_STUDENT_REQUEST, 
      name,cell,email,
      location,admin,createdBy
});

export const addStudentSuccess = () => ({
      type: ADD_STUDENT_SUCCESS,
});

export const addStudentFailure = () => ({
      type: ADD_STUDENT_FAILURE,
});

export const loadStudentsSystemDataRequest = () => ({
      type: LOAD_STUDENTS_SYSTEM_DATA_REQUEST,
});

export const loadStudentsRequest = () => {
    return{
      type: LOAD_STUDENTS_REQUEST,
   }
};

export const loadStudentsSuccess = (students) => ({
      type: LOAD_STUDENTS_SUCCESS,
      students
});

export const updatePaymentStatusRequest = (id, username) => ({
      type: UPDATE_PAYMENT_STATUS_REQUEST,
      id,
      username
});

export const updatePaymentStatusSuccess = (id) => ({
      type: UPDATE_PAYMENT_STATUS_SUCCESS,
      id
});

export const updateImageRequest = (id, image, username) => ({
      type: UPDATE_IMAGE_REQUEST,
      id,
      image,
      username
});

export const updateImageSuccess = (id, image) => ({
      type: UPDATE_IMAGE_SUCCESS,
      id,
      image
});

export const deleteRequest = (id, username) => ({
      type: DELETE_REQUEST,
      id,
      username
});

export const deleteSuccess = (id) => ({
      type: DELETE_SUCCESS,
      id
});

export const updatePassword = (id, password) => ({
      type: UPDATE_PASSWORD,
      id,
      password
});

export const addCoursesRequest = (id, courses, createdBy) => ({
      type: ADD_COURSES_REQUEST,
      id,
      courses,
      createdBy
});

export const addCoursesSuccess = (id, courses) => ({
      type: ADD_COURSES_SUCCESS,
      id,
      courses
});

export const loadSystemDataRequest = () => {
    return{
      type: LOAD_SYSTEM_DATA_REQUEST,
   }
};

export const loadSystemDataSuccess = (systemData) => ({
      type: LOAD_SYSTEM_DATA_SUCCESS,
      systemData
});