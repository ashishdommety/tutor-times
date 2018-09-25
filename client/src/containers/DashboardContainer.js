import { connect } from 'react-redux';
import Dashboard from '../presentation/Dashboard/Dashboard';
import fetchUserAsync from '../actionCreators/async/fetchUserAsync';

function mapStateToProps(state){
  return {
    title: state.profile.title
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchUserAsync: (google_id) => dispatch(fetchUserAsync(google_id))
  }
}
const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default DashboardContainer;