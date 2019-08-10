import { connect } from 'react-redux'
import Statistics from './component';

export const mapStateToProps = (state) => {
    return {
        students: state.StudentsReducer.students,
        studentCourses: state.CoursesReducer.studentCourses
    };
};


export default connect(mapStateToProps,null)(Statistics)

