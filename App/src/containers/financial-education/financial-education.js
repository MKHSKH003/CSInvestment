import { connect } from 'react-redux'
import { ToastActionsCreators } from 'react-native-redux-toast';
import {loadMarketUpdatesRequest} from '../../actions/marketUpdatesActions'
import FinancialEducation from '../../components/financial-education/financial-education';

const mapDispatchToProps =(dispatch)=>{
    return{
     sendInfo: (message) => { return dispatch(ToastActionsCreators.displayInfo(message));},
     loadMarketUpdates:() => {return dispatch(loadMarketUpdatesRequest());}
    }
};

export default connect(null,mapDispatchToProps)(FinancialEducation)

