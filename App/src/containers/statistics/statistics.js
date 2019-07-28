import { connect } from 'react-redux'
import Statistics from '../../components/statistics/statistics';

export const mapStateToProps = (state) => {
    return {
        students: state.loadStudentsReducer.students,
        studentCourses: state.loadStudentCoursesReducer.studentCourses
    };
};


export default connect(mapStateToProps,null)(Statistics)

