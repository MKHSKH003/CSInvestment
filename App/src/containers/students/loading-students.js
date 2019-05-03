import { connect } from 'react-redux'
import LoadingStudents from '../../components/students/loading-students';

const mapStateToProps = (state) =>{
    return {
        loading: state.loadStudentsReducer.status.loading,
    }
} 

export default connect(mapStateToProps,null)(LoadingStudents)

