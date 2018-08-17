import { connect } from 'react-redux';
import Navigation from '../presentation/Navigation/Navigation';
// import { checkLogin } from '../actionCreators/async';

function mapStateToProps(state){
  return {
    name: state.name,
    picture: state.picture,
    isTutor: state.isTutor
  }
}

// function mapDispatchToProps(dispatch){  
//   return{ 
//     instigateLogin: () => dispatch(checkLogin())
//   }
// }

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;