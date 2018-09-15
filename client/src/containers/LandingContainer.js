import { connect } from 'react-redux';
import Landing from '../presentation/Dashboard/Landing/Landing';
import fetchAllClassesAsync from '../actionCreators/async/fetchAllClassesAsync';

function mapStateToProps(state){
  return {
    classes: state.classes
  }
}

function mapDispatchToProps(dispatch){  
  return{ 
    fetchAllClassesAsync: () => dispatch(fetchAllClassesAsync())
  }
}

const LandingContainer = connect(mapStateToProps, mapDispatchToProps)(Landing);

export default LandingContainer;