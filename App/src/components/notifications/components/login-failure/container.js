import { connect } from 'react-redux'
import LoginFailure from './component';

const mapStateToProps = (state) => {
    return{
        isLoginSuccess: state.loginReducer.status.isLoginSuccess
    }
}; 

export default connect(mapStateToProps,null)(LoginFailure)

