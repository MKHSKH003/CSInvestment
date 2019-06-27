import { connect } from 'react-redux'
import LoginScreen from '../../components/login/LoginScreen';
import { login } from '../../actions/loginActions';

export const mapStateToProps = (state) => {
    return {
        loading: state.loginReducer.status.loading,
        username:state.loginReducer.username,
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     userLogin:(username,password)=>{
         return dispatch(login('skhumbuzo', 'admin'))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)

