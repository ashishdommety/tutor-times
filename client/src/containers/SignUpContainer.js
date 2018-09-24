import { connect } from 'react-redux';
import SignUp from '../presentation/SignUp/SignUp';
import sendNewUserAsync from '../actionCreators/async/sendNewUserAsync';

function mapStateToProps(state){
  return {
    classes: state.classes,
    pathName: state.pathName
  }
}

function mapDispatchToProps(dispatch){  
  return{ 
    sendNewUserAsync: (newUser) => dispatch(sendNewUserAsync(newUser))
  }
}

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;