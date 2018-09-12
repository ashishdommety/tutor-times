import { connect } from 'react-redux';
import Dashboard from '../presentation/Dashboard/Dashboard';

function mapStateToProps(state){
  return {
    title: state.profile.title
  }
}
const DashboardContainer = connect(mapStateToProps)(Dashboard);

export default DashboardContainer;