import { connect } from 'react-redux'
import AddStudent from './component';
import { addStudentRequest } from '../../../students/list/actions';

export const mapStateToProps = state => ({
    username: state.loginReducer.username,
    loading: state.StudentsReducer.status.loading,
    deviceTokens: state.pushNotificationsReducer.devices,
})

const mapDispatchToProps = dispatch => ({
    addStudent:(name, cell, email, location, admin, createdBy, deviceTokens) =>
        dispatch(addStudentRequest(name, cell, email, location, admin, createdBy, deviceTokens))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddStudent)

