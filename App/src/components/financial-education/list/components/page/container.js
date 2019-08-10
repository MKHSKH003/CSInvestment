import { connect } from 'react-redux'
import { ToastActionsCreators } from 'react-native-redux-toast';
import FinancialEducation from './component';

const mapDispatchToProps =(dispatch) => ({
    sendInfo: (message) => { return dispatch(ToastActionsCreators.displayInfo(message));},
});

export default connect(null, mapDispatchToProps)(FinancialEducation)

