import { connect } from 'react-redux'
import Students from './component';
import {updatePaymentStatusRequest, deleteRequest, updateImageRequest, addCoursesRequest, updatePassword} from '../../actions'

export const mapStateToProps = (state) => ({
    students: state.StudentsReducer.students,
    student: state.loginReducer.student,
    loading: state.StudentsReducer.status.loading
});

const mapDispatchToProps =(dispatch)=> ({
    addCourses: (id, courses, username) => { return dispatch(addCoursesRequest(id, courses, username));},
    updatePaymentStatus: (id, username) => { return dispatch(updatePaymentStatusRequest(id, username));},
    updateImage: (id, image, username) => {return dispatch(updateImageRequest(id, image, username));},
    updatePassword: (id, password) => {return dispatch(updatePassword(id, password));},
    deleteStudent: (id, username) =>  { return dispatch(deleteRequest(id, username)); }
});

export default connect(mapStateToProps,mapDispatchToProps)(Students)

