import { connect } from 'react-redux';
import Landing from '../presentation/Dashboard/Landing/Landing';
import { fetchNextClassAsync } from '../actionCreators/async';

function mapStateToProps(state){
  // console.log(state.home.nextStudent);
  return {
    name: state.home.nextStudent.name,
    picture: state.home.nextStudent.photoURL,
    day: state.home.nextStudent.day,
    date: state.home.nextStudent.date,
    time: state.home.nextStudent.time
  }
}

function mapDispatchToProps(dispatch){  
  return{ 
    fetchNextClassAsync: () => dispatch(fetchNextClassAsync())
  }
}

const LandingContainer = connect(mapStateToProps, mapDispatchToProps)(Landing);

export default LandingContainer;