export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';

export const LOAD_STUDENTS_REQUEST = 'LOAD_STUDENTS_REQUEST';
export const LOAD_STUDENTS_SUCCESS = 'LOAD_STUDENTS_SUCCESS';
export const LOAD_STUDENTS_FAILURE = 'LOAD_STUDENTS_FAILURE';

export const UPDATE_IMAGE_REQUEST = 'UPDATE_IMAGE_REQUEST';
export const UPDATE_PAYMENT_STATUS_REQUEST = 'UPDATE_PAYMENT_STATUS_REQUEST';
export const DELETE_REQUEST = 'DELETE_REQUEST';
export const ADD_COURSES_REQUEST ='ADD_COURSES_REQUEST';
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

export const updateImageRequest = (id, image, username) => ({
      type: UPDATE_IMAGE_REQUEST,
      id,
      image,
      username
});

export const deleteRequest = (id, username) => ({
      type: DELETE_REQUEST,
      id,
      username
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
