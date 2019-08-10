import { connect } from 'react-redux'
import Header from './component';
import { logout } from '../../../login/actions';

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

