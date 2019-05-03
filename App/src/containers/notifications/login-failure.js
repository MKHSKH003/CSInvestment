import { connect } from 'react-redux'
import LoginFailure from '../../components/notifications/login-failure';

const mapStateToProps = (state) => {
    return{
        isLoginSuccess: state.loginReducer.status.isLoginSuccess
    }
}; 

export default connect(mapStateToProps,null)(LoginFailure)

