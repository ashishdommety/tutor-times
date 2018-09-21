import { connect } from 'react-redux';
import Navigation from '../presentation/Dashboard/Navigation/Navigation';
// import { fetchGoogleData } from '../actionCreators/async';

function mapStateToProps(state){
  return {
    name: state.name,
    picture: state.picture,
    isTutor: state.isTutor
  }
}

// function mapDispatchToProps(dispatch){  
//   return{ 
//     fetchGoogleData: () => dispatch(fetchGoogleData)
//   }
// }

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;