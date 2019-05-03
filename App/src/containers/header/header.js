import { connect } from 'react-redux'
import Header from '../../components/header/header';
import { logout } from '../../actions/loginActions';

export const mapStateToProps = (state) => {
    return {
        username: state.loginReducer.username,
    };
};

const mapDispatchToProps =(dispatch)=>{
    return{
     logout:(username)=>{
         return dispatch(logout(username))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)

