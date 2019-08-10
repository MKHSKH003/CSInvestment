import { connect } from 'react-redux'
import LoginScreen from './component'
import { login } from '../../actions'
import { loadUserDevicesRequest } from '../../../../components/main-screen/actions'

export const mapStateToProps = (state) => ({
    loading: state.loginReducer.status.loading,
    username:state.loginReducer.username,
    deviceTokens: state.pushNotificationsReducer.devices
})

const mapDispatchToProps = dispatch => {
    dispatch(loadUserDevicesRequest());

    return {
        userLogin:(username, password, deviceTokens) => dispatch(login(username, password, deviceTokens))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)

