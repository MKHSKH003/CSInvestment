export const LOAD_COURSES_REQUEST = 'LOAD_COURSES_REQUEST';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const LOAD_COURSES_FAILURE = 'LOAD_COURSES_FAILURE';

export const LOAD_COURSES_SYSTEM_DATA_REQUEST = 'LOAD_COURSES_SYSTEM_DATA_REQUEST';
export const LOAD_STUDENT_COURSES_SYSTEM_DATA_REQUEST = 'LOAD_STUDENT_COURSES_SYSTEM_DATA_REQUEST';

export const LOAD_STUDENT_COURSES_REQUEST = 'LOAD_STUDENT_COURSES_REQUEST';
export const LOAD_STUDENT_COURSES_SUCCESS = 'LOAD_STUDENT_COURSES_SUCCESS';
export const LOAD_STUDENT_COURSES_FAILURE = 'LOAD_STUDENT_COURSES_FAILURE';

export const UPDATE_SCHEDULE_REQUEST = 'UPDATE_SCHEDULE_REQUEST'
export const UPDATE_SCHEDULE_SUCCESS = 'UPDATE_SCHEDULE_SUCCESS'

export const loadCoursesSystemDataRequest = () => ({
      type: LOAD_COURSES_SYSTEM_DATA_REQUEST,
});

export const loadStudentCoursesSystemDataRequest = () => ({
      type: LOAD_STUDENT_COURSES_SYSTEM_DATA_REQUEST,
});

export const loadCoursesRequest = () => ({
      type: LOAD_COURSES_REQUEST,
});

export const loadCoursesSuccess = (courses) => ({
      type: LOAD_COURSES_SUCCESS,
      courses
});

export const loadStudentCoursesRequest = () => ({
      type: LOAD_STUDENT_COURSES_REQUEST,
});

export const loadStudentCoursesSuccess = (studentCourses) => ({
      type: LOAD_STUDENT_COURSES_SUCCESS,
      studentCourses
});

export const updateScheduleRequest = (id, date, venue, username) => ({
      type: UPDATE_SCHEDULE_REQUEST,
      id,
      date,
      venue,
      username
});

export const updateScheduleSuccess = (id, date, venue) => ({
      type: UPDATE_SCHEDULE_SUCCESS,
      id,
      date,
      venue
});