import { connect } from 'react-redux'
import MarketUpdates from '../../components/financial-education/market-updates';
import {PostMarketUpdateRequest, deleteMarketUpdateRequest} from '../../actions/marketUpdatesActions'

const mapStateToProps = (state) =>{
    return {
        loading: state.loadMarketUpdatesReducer.status.loading,
        marketUpdates: state.loadMarketUpdatesReducer.marketUpdates,
        currentUser: state.loginReducer.student,
        devices: state.pushNotificationsReducer.devices
    }
} 

const mapDispatchToProps =(dispatch)=>{
    return{
     PostMarketUpdates:(avatar, caption) => {return dispatch(PostMarketUpdateRequest(avatar, caption));},
     deleteMarketUpdate: (id) =>  { return dispatch(deleteMarketUpdateRequest(id)); }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(MarketUpdates)

