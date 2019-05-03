import { connect } from 'react-redux'
import MainGrid from '../../components/main-screen/main'; 

const mapStateToProps = (state) => {
    return{
        bookingSuccess: 'state.bookingReducer.status.bookingSuccess',
    }
};

export default  connect(mapStateToProps,null)(MainGrid)
