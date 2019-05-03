import { connect } from 'react-redux'
import AddStudent from '../../components/students/add-student';
import { addStudentRequest } from '../../actions/studentsActions';

export const mapStateToProps = (state) => {
    return {
        username: state.loginReducer.username,
        loading: state.addStudentReducer.status.loading
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     addStudent:(name, cell, email, location, admin, createdBy)=>{
         return dispatch(addStudentRequest(name, cell, email, location, admin, createdBy))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddStudent)

