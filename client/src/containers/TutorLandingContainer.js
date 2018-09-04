import { connect } from 'react-redux';
import TutorLanding from '../presentation/Dashboard/TutorLanding/TutorLanding';
import { getTutorDataAsync } from '../actionCreators/async';

function mapStateToProps(state){
  console.log(state.home.nextStudent);
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
    getTutorDataAsync: () => dispatch(getTutorDataAsync())
  }
}

const TutorLandingContainer = connect(mapStateToProps, mapDispatchToProps)(TutorLanding);

export default TutorLandingContainer;