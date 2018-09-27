import { connect } from 'react-redux';
import Landing from '../presentation/Dashboard/Landing/Landing';

function mapStateToProps(state){
  return {
    classes: state.classes
  }
}

// function mapDispatchToProps(dispatch){  
//   return{ 
    
//   }
// }

const LandingContainer = connect(mapStateToProps)(Landing);

export default LandingContainer;