import { connect } from 'react-redux'
import { ToastActionsCreators } from 'react-native-redux-toast';
import {loadMarketUpdatesRequest, deleteMarketUpdateRequest, PostMarketUpdateRequest} from '../../actions'
import MarketUpdates from './component';

const mapStateToProps = (state) => ({
    loadingMarketUpdates: state.MarketUpdatesReducer.status.loading,
    marketUpdates: state.MarketUpdatesReducer.marketUpdates,
    currentUser: state.loginReducer.student,
    devices: state.pushNotificationsReducer.devices
}) 

const mapDispatchToProps =(dispatch) => ({
    sendInfo: (message) => { return dispatch(ToastActionsCreators.displayInfo(message));},
    loadMarketUpdates:() => {return dispatch(loadMarketUpdatesRequest());},
    PostMarketUpdates:(avatar, caption) => {return dispatch(PostMarketUpdateRequest(avatar, caption));},
    deleteMarketUpdate: (id) =>  { return dispatch(deleteMarketUpdateRequest(id)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketUpdates)

