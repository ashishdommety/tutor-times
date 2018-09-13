import { connect } from 'react-redux';
import Landing from '../presentation/Dashboard/Landing/Landing';
import { fetchNextClassAsync, fetchAllClassesAsync } from '../actionCreators/async';

function mapStateToProps(state){
  // console.log(state.home.nextStudent);
  return {
    classes: state.classes
  }
}

function mapDispatchToProps(dispatch){  
  return{ 
    fetchNextClassAsync: () => dispatch(fetchNextClassAsync()),
    fetchAllClassesAsync: () => dispatch(fetchAllClassesAsync())
  }
}

const LandingContainer = connect(mapStateToProps, mapDispatchToProps)(Landing);

export default LandingContainer;