import { connect } from 'react-redux';
import Landing from '../presentation/Dashboard/Landing/Landing';
import { fetchNextClassAsync } from '../actionCreators/async';

function mapStateToProps(state){
  // console.log(state.home.nextStudent);
  return {
    name: state.classes.classes[state.classes.classes.length-1].name,
    picture: state.classes.classes[state.classes.classes.length-1].photoURL,
    day: state.classes.classes[state.classes.classes.length-1].day,
    date: state.classes.classes[state.classes.classes.length-1].date,
    time: state.classes.classes[state.classes.classes.length-1].time
  }
}

function mapDispatchToProps(dispatch){  
  return{ 
    fetchNextClassAsync: () => dispatch(fetchNextClassAsync())
  }
}

const LandingContainer = connect(mapStateToProps, mapDispatchToProps)(Landing);

export default LandingContainer;