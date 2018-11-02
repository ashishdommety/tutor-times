import { connect } from 'react-redux';
import Landing from '../presentation/Dashboard/Landing/Landing';

function mapStateToProps(state){
  return {
    title: state.profile.title
  }
}

const LandingContainer = connect(mapStateToProps)(Landing);

export default LandingContainer;