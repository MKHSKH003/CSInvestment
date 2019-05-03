import { connect } from 'react-redux'
import LoadingCourses from '../../components/courses/loading-courses';

const mapStateToProps = (state) =>{
    return {
        loading: state.loadCoursesReducer.status.loading,
        loadingStudentCourses: state.loadStudentCoursesReducer.status.loading,
    }
} 

export default connect(mapStateToProps,null)(LoadingCourses)

