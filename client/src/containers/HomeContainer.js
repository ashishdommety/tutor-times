import { connect } from 'react-redux';
import Home from '../presentation/Home/Home';
import { fetchGoogleData } from '../actionCreators/async';
// console.log(finLogin);

function mapStateToProps(state){
  return {
    status: state.status
  }
}

function mapDispatchToProps(dispatch){  
  return{ 
    fetchGoogleData: (name, photo) => dispatch(fetchGoogleData(name, photo))
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;