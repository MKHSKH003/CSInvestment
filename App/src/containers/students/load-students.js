import { connect } from 'react-redux'
import Students from '../../components/students/view-students';
import {updatePaymentStatusRequest, deleteRequest, updateImageRequest, addCoursesRequest, updatePassword} from '../../actions/studentsActions'

export const mapStateToProps = (state) => {
    return {
        students: state.loadStudentsReducer.students,
        student: state.loginReducer.student,
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     addCourses: (id, courses, username) => { return dispatch(addCoursesRequest(id, courses, username));},
     updatePaymentStatus: (id, username) => { return dispatch(updatePaymentStatusRequest(id, username));},
     updateImage: (id, image, username) => {return dispatch(updateImageRequest(id, image, username));},
     updatePassword: (id, password) => {return dispatch(updatePassword(id, password));},
     deleteStudent: (id, username) =>  { return dispatch(deleteRequest(id, username)); }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Students)

