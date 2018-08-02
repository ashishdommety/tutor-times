import { connect } from 'react-redux';
import Home from '../presentation/Home/Home';
import { checkLogin } from '../actionCreators/async';
// console.log(finLogin);

function mapStateToProps(state){
  return {
    status: state.status
  }
}

function mapDispatchToProps(dispatch){  
  return{ 
    instigateLogin: () => dispatch(checkLogin())
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;