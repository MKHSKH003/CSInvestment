import { connect } from 'react-redux'
import { ToastActionsCreators } from 'react-native-redux-toast';
import {loadMarketUpdatesRequest, deleteMarketUpdateRequest, postMarketUpdateRequest,
        postLikeRequest } from '../../actions'
import MarketUpdates from './component';

const mapStateToProps = (state) => ({
    loadingMarketUpdates: state.MarketUpdatesReducer.status.loading,
    marketUpdates: (state.MarketUpdatesReducer.marketUpdates).sort((a,b) => (a.Id < b.Id) ? 1 : -1),
    currentUser: state.loginReducer.student,
    devices: state.pushNotificationsReducer.devices
}) 

const mapDispatchToProps =(dispatch) => ({
    sendInfo: (message) => dispatch(ToastActionsCreators.displayInfo(message)),
    loadMarketUpdates:() => dispatch(loadMarketUpdatesRequest()),
    onPostMarketUpdates:(avatar, caption, currentUser) => dispatch(postMarketUpdateRequest(avatar, caption, currentUser)),
    onDeleteMarketUpdate: (id) =>  dispatch(deleteMarketUpdateRequest(id)),
    onPostLike: (id, currentUser, devices) =>  dispatch(postLikeRequest(id, currentUser, devices))
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketUpdates)

